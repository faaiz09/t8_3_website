import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CardFooter,
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
  Star,
  Calendar,
  Sparkles,
  Heart,
  Coffee,
  Zap,
  Award,
  Laptop,
  GraduationCap,
  Rocket,
  ChevronDown,
  ChevronUp,
  X,
  Bookmark,
  Share2,
  Send,
  Shield,
  Users,
  FileText,
  Check, 
  DollarSign, 
  BookOpen
} from "lucide-react";
import ParticleEffects from "./animations/ParticleEffects";
import Footer from "./Footer";
import Navbar from "./Navbar";
import worklifeImage from "@/assets/img/work_life.png";

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
    // window.scrollTo({ top: 0, behavior: "smooth" });
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

  // Animation for counting up numbers
  const [countUp, setCountUp] = useState({
    openings: 0,
    employees: 0,
    countries: 0,
    satisfaction: 0
  });

  const targetNumbers = {
    openings: 10,
    employees: 85,
    countries: 25,
    satisfaction: 98
  };

  useEffect(() => {
    const duration = 2000; // ms
    const interval = 20; // ms
    const steps = duration / interval;

    const timer = setInterval(() => {
      setCountUp(prev => ({
        openings: prev.openings < targetNumbers.openings ?
          Math.min(prev.openings + Math.ceil(targetNumbers.openings / steps), targetNumbers.openings) : prev.openings,
        employees: prev.employees < targetNumbers.employees ?
          Math.min(prev.employees + Math.ceil(targetNumbers.employees / steps), targetNumbers.employees) : prev.employees,
        countries: prev.countries < targetNumbers.countries ?
          Math.min(prev.countries + Math.ceil(targetNumbers.countries / steps), targetNumbers.countries) : prev.countries,
        satisfaction: prev.satisfaction < targetNumbers.satisfaction ?
          Math.min(prev.satisfaction + Math.ceil(targetNumbers.satisfaction / steps), targetNumbers.satisfaction) : prev.satisfaction
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950 -z-10"></div>

        {/* Animated shapes */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-red-500/10 dark:bg-red-500/20"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(50px)",
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: Math.random() * 10 + 15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div> */}

        {/* Particle effect overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <ParticleEffects
            color="#ef4444"
            opacity={0.85}
            particleCount={100}
            width="100%"
            height="100%"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: [0, 5, 0, -5, 0] }}
              transition={{
                scale: { duration: 0.5 },
                rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-lg blur opacity-30 animate-pulse"></div>
                <div className="relative bg-white dark:bg-gray-950 px-4 py-1 rounded-lg">
                  <Badge variant="outline" className="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 border-red-200 dark:border-red-800 px-3 py-1 text-sm font-medium">
                    We're Hiring!
                  </Badge>
                </div>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-gray-700 dark:from-red-600 dark:via-red-500 dark:to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join Our Team
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Build the future of banking technology with us. Discover exciting
              career opportunities at T8.
            </motion.p>

            {/* Stats counter */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[
                { icon: <Briefcase className="h-6 w-6 text-red-500" />, value: countUp.openings, label: "Open Positions", suffix: "+" },
                { icon: <Users className="h-6 w-6 text-blue-500" />, value: countUp.employees, label: "Team Members", suffix: "+" },
                { icon: <MapPin className="h-6 w-6 text-green-500" />, value: countUp.countries, label: "States", suffix: "" },
                { icon: <Heart className="h-6 w-6 text-purple-500" />, value: countUp.satisfaction, label: "Employee Satisfaction", suffix: "%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index + 0.5, duration: 0.5 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-gray-50 dark:bg-gray-700 mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="openings"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center">
              <TabsList className=" h-100 grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 p-1.5 bg-white dark:bg-gray-800 shadow-lg rounded-full border border-gray-100 dark:border-gray-700">
                <TabsTrigger
                  value="openings"
                  className="text-sm md:text-base rounded-full py-3 px-6 data-[state=active]:bg-red-600 data-[state=active]:text-white dark:data-[state=active]:bg-red-600 transition-all duration-300"
                >
                  <Briefcase className="h-4 w-4 mr-2 inline-block" />
                  Job Openings
                </TabsTrigger>
                <TabsTrigger
                  value="culture"
                  className="text-sm md:text-base rounded-full py-3 px-6 data-[state=active]:bg-red-600 data-[state=active]:text-white dark:data-[state=active]:bg-red-600 transition-all duration-300"
                >
                  <Heart className="h-4 w-4 mr-2 inline-block" />
                  Our Culture
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="text-sm md:text-base rounded-full py-3 px-6 data-[state=active]:bg-red-600 data-[state=active]:text-white dark:data-[state=active]:bg-red-600 transition-all duration-300"
                >
                  <Award className="h-4 w-4 mr-2 inline-block" />
                  Benefits
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Job Openings Tab */}
            <TabsContent value="openings" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Job Listings */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                  <div className="mb-8">
                    <div className="relative">
                      <Search
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <Input
                        placeholder="Search positions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 py-6 rounded-full border-gray-200 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 mr-2">
                        <Filter size={16} className="text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
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
                          className={`cursor-pointer px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${selectedDepartment === dept ? "bg-red-600 hover:bg-red-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                          onClick={() => setSelectedDepartment(dept)}
                        >
                          {dept}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-2">
                        <Clock size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
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
                          className={`cursor-pointer px-3 py-1 text-sm font-medium rounded-full transition-all duration-300 ${selectedJobType === type ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                          onClick={() => setSelectedJobType(type)}
                        >
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {filteredJobs.length} {filteredJobs.length === 1 ? "Position" : "Positions"} Found
                      </h3>
                      <Badge variant="outline" className="bg-gray-50 dark:bg-gray-700">
                        <Calendar className="h-3 w-3 mr-1" />
                        Updated Today
                      </Badge>
                    </div>

                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                      {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                          <motion.div
                            key={job.id}
                            className={`p-5 border rounded-xl cursor-pointer transition-all duration-300 ${selectedJob?.id === job.id ? "border-red-500 bg-red-50/50 dark:bg-red-900/10 shadow-md" : "border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 hover:shadow-md"}`}
                            onClick={() => handleJobSelect(job)}
                            whileHover={{ y: 0, scale: 1.0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex justify-between items-start">
                              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                                {job.title}
                              </h3>
                              <div className="flex space-x-1">
                                <motion.button
                                  className="p-1.5 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Bookmark size={16} />
                                </motion.button>
                                <motion.button
                                  className="p-1.5 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Share2 size={16} />
                                </motion.button>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-3">
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                <MapPin size={14} className="mr-1 text-red-500" />
                                {job.location}
                              </div>
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                                <Briefcase size={14} className="mr-1 text-blue-500" />
                                {job.department}
                              </div>
                            </div>

                            <div className="flex justify-between items-center mt-2">
                              <Badge
                                variant="secondary"
                                className={`${job.type === "Remote" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                                  job.type === "Contract" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" :
                                    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"} px-2.5 py-1 rounded-full`}
                              >
                                {job.type}
                              </Badge>
                              <span className="text-xs text-gray-500 dark:text-gray-400">
                                Posted {new Date(job.postedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                              </span>
                            </div>
                          </motion.div>
                        ))
                      ) : (
                        <motion.div
                          className="text-center py-12 px-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-dashed border-gray-300 dark:border-gray-700"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Search className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                          <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">No matching positions</h4>
                          <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSearchTerm("");
                              setSelectedDepartment("All");
                              setSelectedJobType("All");
                            }}
                            className="border-red-300 text-red-600 hover:bg-red-50 dark:border-red-700 dark:text-red-400 dark:hover:bg-red-900/20"
                          >
                            Clear Filters
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Job Details or Application Form */}
                <div className="lg:col-span-2">
                  <AnimatePresence mode="wait">
                    {selectedJob &&
                      !showApplicationForm &&
                      !applicationSubmitted && (
                        <motion.div
                          key="job-details"
                          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, type: "spring" }}
                        >
                          <div className="flex justify-between items-start mb-6">
                            <div>
                              <div className="flex items-center mb-2">
                                <Badge className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 mr-2 px-2 py-0.5 text-xs rounded-md">
                                  {selectedJob.department}
                                </Badge>
                                <Badge className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 text-xs rounded-md">
                                  {selectedJob.type}
                                </Badge>
                              </div>
                              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                {selectedJob.title}
                              </h2>
                            </div>
                            <div className="flex space-x-2">
                              <motion.button
                                className="p-2 rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Bookmark size={20} />
                              </motion.button>
                              <motion.button
                                className="p-2 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Share2 size={20} />
                              </motion.button>
                            </div>
                          </div>

                          <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap gap-6 mb-4">
                              <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 mr-2">
                                  <MapPin size={18} className="text-red-500" />
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">Location</div>
                                  <div className="font-medium">{selectedJob.location}</div>
                                </div>
                              </div>
                              <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-2">
                                  <Briefcase size={18} className="text-blue-500" />
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">Department</div>
                                  <div className="font-medium">{selectedJob.department}</div>
                                </div>
                              </div>
                              <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <div className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 mr-2">
                                  <Clock size={18} className="text-green-500" />
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">Job Type</div>
                                  <div className="font-medium">{selectedJob.type}</div>
                                </div>
                              </div>
                              <div className="flex items-center text-gray-600 dark:text-gray-300">
                                <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-2">
                                  <Calendar size={18} className="text-purple-500" />
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">Posted</div>
                                  <div className="font-medium">{formatDate(selectedJob.postedDate)}</div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                              {[
                                { icon: <Star className="h-4 w-4 text-yellow-500" />, text: "Competitive Salary" },
                                { icon: <GraduationCap className="h-4 w-4 text-blue-500" />, text: "Learning Opportunities" },
                                { icon: <Laptop className="h-4 w-4 text-green-500" />, text: "Remote Work Options" },
                                { icon: <Rocket className="h-4 w-4 text-purple-500" />, text: "Career Growth" },
                              ].map((perk, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="flex items-center gap-1 px-3 py-1 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                                >
                                  {perk.icon}
                                  <span>{perk.text}</span>
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                              <div className="p-1.5 rounded-md bg-red-100 dark:bg-red-900/30 mr-2">
                                <FileText size={16} className="text-red-500" />
                              </div>
                              Job Description
                            </h3>
                            <div className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                              <p className="mb-4">{selectedJob.description}</p>
                            </div>
                          </div>

                          <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                              <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 mr-2">
                                <CheckCircle size={16} className="text-blue-500" />
                              </div>
                              Key Responsibilities
                            </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                              {selectedJob.responsibilities.map((item, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 }}
                                >
                                  <div className="min-w-[20px] mt-1.5">
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                  </div>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="mb-10">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                              <div className="p-1.5 rounded-md bg-green-100 dark:bg-green-900/30 mr-2">
                                <GraduationCap size={16} className="text-green-500" />
                              </div>
                              Requirements
                            </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                              {selectedJob.requirements.map((item, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start gap-3"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                  <div className="min-w-[20px] mt-1.5">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                  </div>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Interested in this position?</h4>
                              <p className="text-gray-600 dark:text-gray-400">Submit your application today and join our team!</p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                onClick={handleApplyClick}
                                className="bg-red-600 hover:bg-red-700 text-white px-6 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                Apply Now
                                <ArrowRight className="ml-2 h-5 w-5" />
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}

                    {selectedJob &&
                      showApplicationForm &&
                      !applicationSubmitted && (
                        <motion.div
                          key="application-form"
                          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, type: "spring" }}
                        >
                          <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center mb-4">
                              <div className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 mr-3">
                                <Send className="h-5 w-5 text-red-600 dark:text-red-400" />
                              </div>
                              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Apply for {selectedJob.title}
                              </h2>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 ml-12">
                              Complete the form below to apply for this position. Fields marked with * are required.
                            </p>
                          </div>

                          <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div className="space-y-3">
                                <Label
                                  htmlFor="name"
                                  className="text-gray-700 dark:text-gray-300 font-medium"
                                >
                                  Full Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleFormChange}
                                  placeholder="John Doe"
                                  required
                                  className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 py-6 rounded-lg focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500"
                                />
                              </div>
                              <div className="space-y-3">
                                <Label
                                  htmlFor="email"
                                  className="text-gray-700 dark:text-gray-300 font-medium"
                                >
                                  Email Address <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={handleFormChange}
                                  placeholder="john@example.com"
                                  required
                                  className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 py-6 rounded-lg focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500"
                                />
                              </div>
                            </div>

                            <div className="space-y-3">
                              <Label
                                htmlFor="phone"
                                className="text-gray-700 dark:text-gray-300 font-medium"
                              >
                                Phone Number <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleFormChange}
                                placeholder="+91 9876543210"
                                required
                                className="border-gray-300 dark:border-gray-600 dark:bg-gray-700 py-6 rounded-lg focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500"
                              />
                            </div>

                            <div className="space-y-3">
                              <Label
                                htmlFor="resume"
                                className="text-gray-700 dark:text-gray-300 font-medium"
                              >
                                Resume/CV <span className="text-red-500">*</span>
                              </Label>
                              <div className="flex items-center justify-center w-full">
                                <label
                                  htmlFor="resume"
                                  className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300 ${formData.resume ? "border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20" : "border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                                >
                                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    {formData.resume ? (
                                      <>
                                        <CheckCircle className="w-12 h-12 mb-3 text-green-500" />
                                        <p className="mb-2 text-sm font-medium text-green-600 dark:text-green-400">
                                          File uploaded successfully!
                                        </p>
                                        <p className="text-sm text-green-500 dark:text-green-400">
                                          {formData.resume.name}
                                        </p>
                                        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                          Click to change file
                                        </p>
                                      </>
                                    ) : (
                                      <>
                                        <Upload className="w-12 h-12 mb-3 text-gray-500 dark:text-gray-400" />
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                                            Click to upload
                                          </span>{" "}
                                          or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                          PDF, DOC, or DOCX (MAX. 5MB)
                                        </p>
                                      </>
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

                            <div className="space-y-3">
                              <Label
                                htmlFor="coverLetter"
                                className="text-gray-700 dark:text-gray-300 font-medium"
                              >
                                Cover Letter
                              </Label>
                              <Textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleFormChange}
                                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                className="min-h-[180px] border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-lg focus:border-red-500 dark:focus:border-red-500 focus:ring-red-500 dark:focus:ring-red-500"
                              />
                            </div>

                            <div className="flex items-center space-x-2 mt-4">
                              <input
                                type="checkbox"
                                id="privacy"
                                className="rounded border-gray-300 text-red-600 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700"
                                required
                              />
                              <Label
                                htmlFor="privacy"
                                className="text-sm text-gray-600 dark:text-gray-400"
                              >
                                I agree to the{" "}
                                <a
                                  href="#"
                                  className="text-red-600 dark:text-red-400 hover:underline"
                                >
                                  privacy policy
                                </a>{" "}
                                and consent to the processing of my personal data.
                              </Label>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setShowApplicationForm(false)}
                                className="border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 py-6 h-auto"
                              >
                                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                                Back to Job Details
                              </Button>
                              <Button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                Submit Application
                                <Send className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </form>
                        </motion.div>
                      )}

                    {applicationSubmitted && (
                      <motion.div
                        key="success-message"
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      >
                        <motion.div
                          className="flex flex-col items-center justify-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                        >
                          <motion.div
                            className="relative mb-8"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.3 }}
                          >
                            <div className="absolute -inset-4 rounded-full bg-green-500/20 animate-pulse"></div>
                            <div className="relative bg-green-100 dark:bg-green-900/50 p-6 rounded-full">
                              <CheckCircle size={64} className="text-green-600 dark:text-green-400" />
                            </div>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                              Application Submitted Successfully!
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                              Thank you for applying for the <span className="font-semibold text-gray-800 dark:text-gray-200">{selectedJob.title}</span>{" "}
                              position. Our team will review your application and
                              get back to you soon.
                            </p>

                            <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 mb-8 max-w-md mx-auto">
                              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">What happens next?</h3>
                              <ul className="text-left space-y-3 text-gray-600 dark:text-gray-300">
                                <li className="flex items-start gap-2">
                                  <div className="min-w-[24px] mt-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">1</div>
                                  <span>Our team will review your application within 3-5 business days</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="min-w-[24px] mt-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">2</div>
                                  <span>You'll receive an email confirmation with next steps</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <div className="min-w-[24px] mt-0.5 flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">3</div>
                                  <span>Shortlisted candidates will be invited for an interview</span>
                                </li>
                              </ul>
                            </div>

                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                onClick={() => {
                                  setSelectedJob(null);
                                  setShowApplicationForm(false);
                                  setApplicationSubmitted(false);
                                }}
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                              >
                                Browse More Jobs
                              </Button>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}

                    {!selectedJob && (
                      <motion.div
                        key="select-job-prompt"
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-12 text-center border border-gray-100 dark:border-gray-700 transition-colors duration-300 h-full flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="max-w-md mx-auto">
                          <motion.div
                            className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full inline-block mb-6"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                          >
                            <Briefcase size={40} className="text-red-600 dark:text-red-400" />
                          </motion.div>

                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Find Your Perfect Role
                          </h3>

                          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                            Browse our open positions and select a job from the list to view details. We have exciting opportunities across various departments.
                          </p>

                          <div className="flex flex-wrap justify-center gap-3 mb-6">
                            {departments.filter(dept => dept !== "All").slice(0, 5).map((dept, index) => (
                              <motion.div
                                key={dept}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Badge
                                  variant="outline"
                                  className="cursor-pointer px-3 py-1.5 text-sm font-medium rounded-full border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                                  onClick={() => setSelectedDepartment(dept)}
                                >
                                  {dept}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>

                          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
                            <ArrowRight size={14} className="text-red-500" />
                            <span>Select a position from the left to view details</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </TabsContent>

            {/* Our Culture Tab */}
            <TabsContent value="culture" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <motion.div
                  className="md:col-span-5 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <div className="h-64 bg-gradient-to-br from-blue-500 to-red-700 flex items-center justify-center relative overflow-hidden">
                    {/* Animated particles */}
                    {/* {[...Array(20)].map((_, i) => (
                      <motion.div
                      key={i}
                      className="absolute rounded-full bg-white/10"
                      style={{
                      width: Math.random() * 20 + 5,
                      height: Math.random() * 20 + 5,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      }}
                      animate={{
                      y: [0, -100],
                      x: [0, Math.random() * 50 - 25],
                      opacity: [0.7, 0],
                      scale: [1, 0.5],
                      }}
                      transition={{
                      repeat: Infinity,
                      duration: Math.random() * 10 + 15, // Increased to 15-25 seconds
                      delay: Math.random() * 5, // Increased to 0-5 seconds
                      ease: "linear" // Added linear easing for smoother movement
                      }}
                      />
                    ))} */}

                    <div className="relative z-10 text-center px-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="bg-white/10 p-4 rounded-full inline-block mb-4 backdrop-blur-sm"
                      >
                        <Sparkles className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.h3
                        className="text-3xl font-bold text-white mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        Our Values
                      </motion.h3>
                      <motion.p
                        className="text-white/80 text-sm max-w-xs mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        The principles that guide everything we do
                      </motion.p>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="space-y-8">
                      {[
                        {
                          title: "Innovation",
                          description: "We constantly push boundaries and explore new technologies to create cutting-edge solutions for our clients.",
                          icon: <Zap className="h-6 w-6 text-yellow-500" />,
                          color: "bg-yellow-100 dark:bg-yellow-900/30"
                        },
                        {
                          title: "Excellence",
                          description: "We strive for excellence in everything we do, from code quality to customer service.",
                          icon: <Award className="h-6 w-6 text-blue-500" />,
                          color: "bg-blue-100 dark:bg-blue-900/30"
                        },
                        {
                          title: "Collaboration",
                          description: "We believe in the power of teamwork and foster a collaborative environment where diverse perspectives are valued.",
                          icon: <Users className="h-6 w-6 text-green-500" />,
                          color: "bg-green-100 dark:bg-green-900/30"
                        },
                        {
                          title: "Integrity",
                          description: "We conduct our business with honesty, transparency, and ethical practices.",
                          icon: <Shield className="h-6 w-6 text-purple-500" />,
                          color: "bg-purple-100 dark:bg-purple-900/30"
                        },
                      ].map((value, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        >
                          <div className={`p-3 rounded-xl ${value.color} flex-shrink-0`}>
                            {value.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {value.title}
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {value.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="md:col-span-7 space-y-8">
                  <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 transition-colors duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                  >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/30 mr-4">
                    <Coffee className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Life at T8
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      At T8, we believe in creating a workplace where innovation
                      thrives and people feel empowered to do their best work.
                      Our culture is built on collaboration, continuous
                      learning, and work-life balance.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      We celebrate diversity and inclusion, recognizing that
                      different perspectives drive innovation and help us better
                      serve our global clients.
                    </p>
                    </div>
                    <div className="relative h-48 rounded-xl overflow-hidden">
                    <img
                      src={worklifeImage}
                      alt="Life at T8"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    </div>
                  </div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>

            {/* Benefits Tab */}
            <TabsContent value="benefits" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="md:col-span-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-xl p-8 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-bold text-white mb-6 text-center">
                Comprehensive Benefits Package
                </h3>
                <p className="text-white text-lg text-center max-w-3xl mx-auto mb-8">
                At T8, we believe in taking care of our employees. We offer
                a comprehensive benefits package designed to support your
                health, wellbeing, and financial future.
                </p>
              </motion.div>

              {[
                {
                title: "Health & Wellness",
                color: "from-blue-500 to-blue-700",
                icon: <Heart className="h-6 w-6 text-white" />,
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
                color: "from-emerald-500 to-emerald-700",
                icon: <DollarSign className="h-6 w-6 text-white" />,
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
                color: "from-amber-500 to-amber-700",
                icon: <Clock className="h-6 w-6 text-white" />,
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
                color: "from-violet-500 to-violet-700",
                icon: <BookOpen className="h-6 w-6 text-white" />,
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
                color: "from-rose-500 to-rose-700",
                icon: <Coffee className="h-6 w-6 text-white" />,
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
                color: "from-cyan-500 to-cyan-700",
                icon: <Users className="h-6 w-6 text-white" />,
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: category.delay }}
                >
                <div className={`h-16 bg-gradient-to-r ${category.color} flex items-center justify-center gap-3 px-4`}>
                  {category.icon}
                  <h4 className="text-xl font-bold text-white">
                  {category.title}
                  </h4>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                    key={itemIndex}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: category.delay + (itemIndex * 0.1) }}
                    >
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex-shrink-0" />
                    <span>{item}</span>
                    </motion.li>
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
