import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Upload,
  CheckCircle,
} from "lucide-react";
import ParticleEffects from "./animations/ParticleEffects";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface JobListing {
  id: string;
  title: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate: string;
}

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("openings");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
  });

  // Sample job listings
  const jobListings: JobListing[] = [
    {
      id: "job1",
      title: "Senior React Developer",
      location: "Mumbai, India",
      type: "Full-time",
      department: "Engineering",
      description:
        "We're looking for a Senior React Developer to join our growing team. You'll be responsible for building and maintaining high-quality web applications for our banking and kiosk solutions.",
      responsibilities: [
        "Develop new user-facing features using React.js",
        "Build reusable components and front-end libraries for future use",
        "Translate designs and wireframes into high-quality code",
        "Optimize components for maximum performance across devices",
        "Coordinate with cross-functional teams to define, design, and ship new features",
      ],
      requirements: [
        "5+ years of experience with React.js and front-end development",
        "Strong proficiency in JavaScript, TypeScript, HTML, and CSS",
        "Experience with RESTful APIs and modern front-end build pipelines",
        "Familiarity with state management libraries (Redux, Context API)",
        "Understanding of server-side rendering and its benefits",
        "Experience with banking or financial software is a plus",
      ],
      postedDate: "2023-09-15",
    },
    {
      id: "job2",
      title: "UX/UI Designer",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Design",
      description:
        "We are seeking a talented UX/UI Designer to create amazing user experiences for our banking kiosk interfaces. The ideal candidate should have a strong portfolio demonstrating their ability to create intuitive, accessible designs.",
      responsibilities: [
        "Create user-centered designs by understanding business requirements and user feedback",
        "Design flows, wireframes, and visual designs for kiosk interfaces",
        "Create prototypes for new product ideas",
        "Collaborate with product managers and engineers to define and implement innovative solutions",
        "Conduct usability testing and iterate on designs",
      ],
      requirements: [
        "3+ years of experience in UX/UI design for digital products",
        "Strong portfolio showcasing your design projects",
        "Proficiency in design tools such as Figma, Adobe XD, or Sketch",
        "Understanding of accessibility standards and best practices",
        "Experience designing for touchscreen interfaces is a plus",
        "Knowledge of banking or financial services is beneficial",
      ],
      postedDate: "2023-09-20",
    },
    {
      id: "job3",
      title: "Backend Developer (Node.js)",
      location: "Remote, India",
      type: "Remote",
      department: "Engineering",
      description:
        "Join our backend team to build robust, scalable APIs and services that power our banking and kiosk solutions. You'll work with modern technologies to deliver high-performance systems.",
      responsibilities: [
        "Design and implement scalable backend services and APIs",
        "Work with databases and optimize queries for performance",
        "Implement security and data protection measures",
        "Collaborate with frontend developers to integrate user-facing elements",
        "Write clean, maintainable code with proper documentation",
      ],
      requirements: [
        "4+ years of experience with Node.js and backend development",
        "Strong knowledge of JavaScript/TypeScript and server-side frameworks",
        "Experience with database design and ORM tools",
        "Understanding of RESTful API design principles",
        "Familiarity with cloud services (AWS, Azure, or GCP)",
        "Knowledge of security best practices",
      ],
      postedDate: "2023-09-25",
    },
    {
      id: "job4",
      title: "Product Manager",
      location: "Pune, India",
      type: "Full-time",
      department: "Product",
      description:
        "We're looking for a Product Manager to help define and execute our product strategy for banking kiosk solutions. You'll work closely with engineering, design, and business teams to deliver exceptional products.",
      responsibilities: [
        "Define product vision, strategy, and roadmap",
        "Gather and prioritize product requirements",
        "Work with engineering and design teams to deliver features",
        "Analyze market trends and competitor offerings",
        "Collect and analyze user feedback to inform product decisions",
      ],
      requirements: [
        "3+ years of experience in product management",
        "Strong analytical and problem-solving skills",
        "Excellent communication and stakeholder management abilities",
        "Experience with agile development methodologies",
        "Understanding of the banking or financial services industry",
        "Technical background or familiarity with software development",
      ],
      postedDate: "2023-10-01",
    },
    {
      id: "job5",
      title: "DevOps Engineer",
      location: "Hyderabad, India",
      type: "Full-time",
      department: "Operations",
      description:
        "Join our DevOps team to build and maintain our infrastructure, deployment pipelines, and monitoring systems. You'll help ensure our banking and kiosk solutions are reliable, secure, and performant.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure and containerized environments",
        "Implement monitoring, alerting, and logging solutions",
        "Automate infrastructure provisioning and configuration",
        "Collaborate with development teams to improve deployment processes",
      ],
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Experience with containerization technologies (Docker, Kubernetes)",
        "Familiarity with infrastructure as code tools (Terraform, CloudFormation)",
        "Understanding of networking, security, and system administration",
        "Experience with monitoring and observability tools",
      ],
      postedDate: "2023-10-05",
    },
    {
      id: "job6",
      title: "QA Engineer",
      location: "Chennai, India",
      type: "Full-time",
      department: "Quality Assurance",
      description:
        "We're seeking a QA Engineer to ensure the quality of our banking and kiosk solutions. You'll design and execute test plans, identify bugs, and work with development teams to deliver high-quality software.",
      responsibilities: [
        "Create and execute test plans and test cases",
        "Perform manual and automated testing",
        "Report and track bugs through resolution",
        "Collaborate with developers to improve software quality",
        "Participate in code reviews and provide feedback",
      ],
      requirements: [
        "3+ years of experience in software testing",
        "Knowledge of testing methodologies and best practices",
        "Experience with test automation frameworks",
        "Familiarity with agile development processes",
        "Strong analytical and problem-solving skills",
        "Experience testing financial or banking applications is a plus",
      ],
      postedDate: "2023-10-10",
    },
    {
      id: "job7",
      title: "Technical Support Specialist",
      location: "Delhi, India",
      type: "Full-time",
      department: "Customer Support",
      description:
        "Join our support team to help customers resolve technical issues with our banking kiosk solutions. You'll troubleshoot problems, provide guidance, and ensure customer satisfaction.",
      responsibilities: [
        "Respond to customer inquiries and technical issues",
        "Troubleshoot hardware and software problems",
        "Document support cases and solutions",
        "Escalate complex issues to appropriate teams",
        "Provide training and guidance to customers",
      ],
      requirements: [
        "2+ years of experience in technical support",
        "Strong problem-solving and communication skills",
        "Knowledge of banking software or kiosk systems is a plus",
        "Experience with support ticketing systems",
        "Customer-focused mindset and patience",
        "Ability to explain technical concepts to non-technical users",
      ],
      postedDate: "2023-10-15",
    },
    {
      id: "job8",
      title: "Business Analyst",
      location: "Kolkata, India",
      type: "Full-time",
      department: "Business",
      description:
        "We're looking for a Business Analyst to bridge the gap between business needs and technical solutions. You'll gather requirements, analyze processes, and help define solutions for our banking and kiosk products.",
      responsibilities: [
        "Gather and document business requirements",
        "Analyze business processes and identify improvement opportunities",
        "Create functional specifications for development teams",
        "Facilitate communication between business stakeholders and technical teams",
        "Validate solutions against business requirements",
      ],
      requirements: [
        "3+ years of experience as a Business Analyst",
        "Strong analytical and documentation skills",
        "Experience with requirements gathering techniques",
        "Knowledge of banking or financial services industry",
        "Familiarity with agile development methodologies",
        "Excellent communication and presentation skills",
      ],
      postedDate: "2023-10-20",
    },
    {
      id: "job9",
      title: "Marketing Specialist",
      location: "Mumbai, India",
      type: "Full-time",
      department: "Marketing",
      description:
        "Join our marketing team to promote our banking and kiosk solutions. You'll develop marketing strategies, create content, and help drive brand awareness and lead generation.",
      responsibilities: [
        "Develop and execute marketing campaigns",
        "Create compelling content for various channels",
        "Manage social media presence and digital marketing initiatives",
        "Analyze marketing metrics and optimize campaigns",
        "Collaborate with sales and product teams on messaging and positioning",
      ],
      requirements: [
        "3+ years of experience in B2B marketing",
        "Strong content creation and copywriting skills",
        "Experience with digital marketing channels and tools",
        "Knowledge of marketing analytics and reporting",
        "Familiarity with the banking or financial services industry is a plus",
        "Excellent communication and project management skills",
      ],
      postedDate: "2023-10-25",
    },
    {
      id: "job10",
      title: "Sales Executive",
      location: "Bangalore, India",
      type: "Full-time",
      department: "Sales",
      description:
        "We're seeking a Sales Executive to drive revenue growth for our banking and kiosk solutions. You'll identify and pursue new business opportunities, build relationships with clients, and close deals.",
      responsibilities: [
        "Identify and pursue new sales opportunities",
        "Build and maintain relationships with clients",
        "Conduct product demonstrations and presentations",
        "Negotiate contracts and close deals",
        "Collaborate with marketing and product teams",
      ],
      requirements: [
        "3+ years of experience in B2B sales",
        "Strong negotiation and relationship-building skills",
        "Experience selling software or technology solutions",
        "Knowledge of the banking or financial services industry",
        "Excellent communication and presentation abilities",
        "Track record of meeting or exceeding sales targets",
      ],
      postedDate: "2023-11-01",
    },
  ];

  // Filter jobs based on search term and filters
  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesType =
      selectedJobType === "All" || job.type === selectedJobType;

    return matchesSearch && matchesDepartment && matchesType;
  });

  // Get unique departments for filter
  const departments = [
    "All",
    ...new Set(jobListings.map((job) => job.department)),
  ];

  // Get unique job types for filter
  const jobTypes = ["All", ...new Set(jobListings.map((job) => job.type))];

  const handleJobSelect = (job: JobListing) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
    setApplicationSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleApplyClick = () => {
    setShowApplicationForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files?.[0] || null }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    console.log("Form submitted:", formData);
    // Show success message
    setApplicationSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      resume: null,
      coverLetter: "",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background particle effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <ParticleEffects
            color="#ef4444"
            opacity={0.5}
            particleCount={50}
            width="100%"
            height="100%"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-gray-700 dark:from-red-500 dark:to-gray-300">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Build the future of banking technology with us. Discover exciting
              career opportunities at T8.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="openings"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="openings" className="text-sm md:text-base">
                Job Openings
              </TabsTrigger>
              <TabsTrigger value="culture" className="text-sm md:text-base">
                Our Culture
              </TabsTrigger>
              <TabsTrigger value="benefits" className="text-sm md:text-base">
                Benefits
              </TabsTrigger>
            </TabsList>

            {/* Job Openings Tab */}
            <TabsContent value="openings" className="mt-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Job Listings */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
                  <div className="mb-6">
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        placeholder="Search positions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Filter size={16} className="mr-2 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Department
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {departments.map((dept) => (
                        <Badge
                          key={dept}
                          variant={
                            selectedDepartment === dept ? "default" : "outline"
                          }
                          className="cursor-pointer"
                          onClick={() => setSelectedDepartment(dept)}
                        >
                          {dept}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <Clock size={16} className="mr-2 text-gray-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Job Type
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {jobTypes.map((type) => (
                        <Badge
                          key={type}
                          variant={
                            selectedJobType === type ? "default" : "outline"
                          }
                          className="cursor-pointer"
                          onClick={() => setSelectedJobType(type)}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mt-6 max-h-[600px] overflow-y-auto pr-2">
                    {filteredJobs.length > 0 ? (
                      filteredJobs.map((job) => (
                        <motion.div
                          key={job.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${selectedJob?.id === job.id ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700"}`}
                          onClick={() => handleJobSelect(job)}
                          whileHover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-2">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <MapPin size={14} className="mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Briefcase size={14} className="mr-1" />
                              {job.department}
                            </div>
                          </div>
                          <Badge variant="secondary" className="mt-1">
                            {job.type}
                          </Badge>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                        No jobs match your search criteria.
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column - Job Details or Application Form */}
                <div className="lg:col-span-2">
                  {selectedJob &&
                    !showApplicationForm &&
                    !applicationSubmitted && (
                      <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {selectedJob.title}
                          </h2>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <MapPin size={18} className="mr-2 text-red-500" />
                              {selectedJob.location}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <Briefcase
                                size={18}
                                className="mr-2 text-red-500"
                              />
                              {selectedJob.department}
                            </div>
                            <div className="flex items-center text-gray-600 dark:text-gray-300">
                              <Clock size={18} className="mr-2 text-red-500" />
                              {selectedJob.type}
                            </div>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-gray-500 dark:text-gray-400"
                          >
                            Posted on {formatDate(selectedJob.postedDate)}
                          </Badge>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Job Description
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-4">
                            {selectedJob.description}
                          </p>
                        </div>

                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Responsibilities
                          </h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {selectedJob.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            Requirements
                          </h3>
                          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                            {selectedJob.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          onClick={handleApplyClick}
                          className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white"
                        >
                          Apply for this position
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    )}

                  {selectedJob &&
                    showApplicationForm &&
                    !applicationSubmitted && (
                      <motion.div
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Apply for {selectedJob.title}
                          </h2>
                          <p className="text-gray-600 dark:text-gray-300">
                            Complete the form below to apply for this position.
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label
                                htmlFor="name"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                Full Name *
                              </Label>
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleFormChange}
                                placeholder="John Doe"
                                required
                                className="border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="text-gray-700 dark:text-gray-300"
                              >
                                Email Address *
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleFormChange}
                                placeholder="john@example.com"
                                required
                                className="border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="phone"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleFormChange}
                              placeholder="+91 9876543210"
                              required
                              className="border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="resume"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              Resume/CV *
                            </Label>
                            <div className="flex items-center justify-center w-full">
                              <label
                                htmlFor="resume"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                              >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <Upload className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">
                                      Click to upload
                                    </span>{" "}
                                    or drag and drop
                                  </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">
                                    PDF, DOC, or DOCX (MAX. 5MB)
                                  </p>
                                  {formData.resume && (
                                    <p className="mt-2 text-sm text-green-500">
                                      {formData.resume.name}
                                    </p>
                                  )}
                                </div>
                                <input
                                  id="resume"
                                  name="resume"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                  className="hidden"
                                  required
                                />
                              </label>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="coverLetter"
                              className="text-gray-700 dark:text-gray-300"
                            >
                              Cover Letter
                            </Label>
                            <Textarea
                              id="coverLetter"
                              name="coverLetter"
                              value={formData.coverLetter}
                              onChange={handleFormChange}
                              placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                              className="min-h-[150px] border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                            />
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setShowApplicationForm(false)}
                              className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
                            >
                              Back to Job Details
                            </Button>
                            <Button
                              type="submit"
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              Submit Application
                            </Button>
                          </div>
                        </form>
                      </motion.div>
                    )}

                  {applicationSubmitted && (
                    <motion.div
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col items-center justify-center">
                        <div className="mb-4 text-green-500 dark:text-green-400">
                          <CheckCircle size={64} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                          Application Submitted Successfully!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                          Thank you for applying for the {selectedJob.title}{" "}
                          position. Our team will review your application and
                          get back to you soon.
                        </p>
                        <Button
                          onClick={() => {
                            setSelectedJob(null);
                            setShowApplicationForm(false);
                            setApplicationSubmitted(false);
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          Browse More Jobs
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {!selectedJob && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center transition-colors duration-300">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                        Select a job from the list to view details
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Browse our open positions and find the perfect role for
                        your skills and experience.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Our Culture Tab */}
            <TabsContent value="culture" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-64 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center">
                    <h3 className="text-3xl font-bold text-white">
                      Our Values
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Innovation
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          We constantly push boundaries and explore new
                          technologies to create cutting-edge solutions for our
                          clients.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Excellence
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          We strive for excellence in everything we do, from
                          code quality to customer service.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Collaboration
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          We believe in the power of teamwork and foster a
                          collaborative environment where diverse perspectives
                          are valued.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          Integrity
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          We conduct our business with honesty, transparency,
                          and ethical practices.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-8">
                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Life at T8
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      At T8, we believe in creating a workplace where innovation
                      thrives and people feel empowered to do their best work.
                      Our culture is built on collaboration, continuous
                      learning, and work-life balance.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      We celebrate diversity and inclusion, recognizing that
                      different perspectives drive innovation and help us better
                      serve our global clients.
                    </p>
                  </motion.div>

                  <motion.div
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Learning & Development
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      We invest in our employees' growth through continuous
                      learning opportunities, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      <li>Professional development programs</li>
                      <li>Technical training and certifications</li>
                      <li>Leadership development</li>
                      <li>Mentorship programs</li>
                      <li>Conference and workshop attendance</li>
                    </ul>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What Our Employees Say
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      quote:
                        "Working at T8 has been an incredible journey of growth and innovation. The collaborative environment and challenging projects keep me engaged every day.",
                      name: "Priya Sharma",
                      title: "Senior Software Engineer",
                      years: "3 years at T8",
                    },
                    {
                      quote:
                        "What I love most about T8 is the culture of continuous learning. There's always an opportunity to expand your skills and take on new challenges.",
                      name: "Rahul Patel",
                      title: "Product Manager",
                      years: "2 years at T8",
                    },
                    {
                      quote:
                        "The work-life balance at T8 is exceptional. The company truly values employee wellbeing, which makes it a great place to build a career.",
                      name: "Ananya Desai",
                      title: "UX Designer",
                      years: "4 years at T8",
                    },
                  ].map((testimonial, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <CardContent className="p-6">
                        <div className="mb-4 text-gray-600 dark:text-gray-300 italic">
                          "{testimonial.quote}"
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.title}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {testimonial.years}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="md:col-span-3 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    Comprehensive Benefits Package
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8">
                    At T8, we believe in taking care of our employees. We offer
                    a comprehensive benefits package designed to support your
                    health, wellbeing, and financial future.
                  </p>
                </motion.div>

                {[
                  {
                    title: "Health & Wellness",
                    items: [
                      "Comprehensive health insurance",
                      "Dental and vision coverage",
                      "Mental health support",
                      "Wellness programs and fitness reimbursements",
                      "Annual health check-ups",
                    ],
                    delay: 0.1,
                  },
                  {
                    title: "Financial Benefits",
                    items: [
                      "Competitive salary packages",
                      "Performance-based bonuses",
                      "Employee stock options",
                      "Retirement plans with company matching",
                      "Life and disability insurance",
                    ],
                    delay: 0.2,
                  },
                  {
                    title: "Work-Life Balance",
                    items: [
                      "Flexible work arrangements",
                      "Remote work options",
                      "Generous paid time off",
                      "Parental leave",
                      "Sabbatical opportunities",
                    ],
                    delay: 0.3,
                  },
                  {
                    title: "Professional Development",
                    items: [
                      "Learning and development budget",
                      "Conference attendance",
                      "Professional certifications",
                      "Internal mobility opportunities",
                      "Mentorship programs",
                    ],
                    delay: 0.4,
                  },
                  {
                    title: "Office Perks",
                    items: [
                      "Modern, collaborative workspaces",
                      "Free snacks and beverages",
                      "Team building activities",
                      "Recreation areas",
                      "Regular team celebrations",
                    ],
                    delay: 0.5,
                  },
                  {
                    title: "Community & Culture",
                    items: [
                      "Volunteer time off",
                      "Charitable donation matching",
                      "Diversity and inclusion initiatives",
                      "Employee resource groups",
                      "Sustainability programs",
                    ],
                    delay: 0.6,
                  },
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: category.delay }}
                  >
                    <div className="h-12 bg-red-600 flex items-center justify-center">
                      <h4 className="text-lg font-semibold text-white">
                        {category.title}
                      </h4>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3 mt-0.5">
                              <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400"></div>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our open positions and take the next step in your career
              with T8.
            </p>
            <Button
              onClick={() => {
                setActiveTab("openings");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              View All Openings
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
