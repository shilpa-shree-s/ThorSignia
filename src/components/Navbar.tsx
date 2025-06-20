'use client';

import logoImage from "../assets/images/thor-signia-logo.png"; // Make sure this path is correct relative to this component
import React, { useState, useRef, useEffect } from "react"; // Standard React import
import { Link as RouterLink, useLocation } from "react-router-dom"; // Renamed Link to RouterLink to avoid conflict with lucide-react/Icon
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Keep icon imports and import LucideIcon
// Import Menu explicitly here so we can use typeof Menu to get the props type
import {
  Menu, // <-- Keep imports just in case they are used by iconMap or elsewhere
  X,    // <-- Keep imports just in case they are used by iconMap or elsewhere
  LucideIcon, // <--- Imported LucideIcon type
  // Service Icons
  Speech,
  Users,
  Cpu,
  Bot,
  ListTree,
  Shield, // For Threat Detection
  // New service icons
  Mic,
  MessageSquare,
  Share2,
  LineChart,
  BrainCircuit,
  Megaphone,
  BarChart3,
  ShieldAlert,
  // Case Study Icons
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles, // This is a different Sparkles icon, used in data. Keep both if needed.
  Wrench, // Used for Predictive Maintenance
  // Cybersecurity Icons
  Bug,
  CloudAlert,
  Terminal,
  Swords,
  CircuitBoard,
  GraduationCap,
  // Other Icons used in data or component
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  ChevronDown, // Added for dropdown indicators
  // Icons potentially for the main section boxes (added for illustration)
  Settings, // Example icon for Services
  Database, // Example icon for Case Studies
  Icon, // Keep Icon if it's used elsewhere or potentially needed
  List, // Keep List imported if used elsewhere in iconMap/data
} from "lucide-react";

// Mapping from string name to icon component
const iconMap = {
  // Service Icons
  Speech,
  Users,
  Cpu,
  Bot,
  ListTree,
  Shield,
  Mic,
  MessageSquare,
  Share2,
  LineChart,
  BrainCircuit,
  Megaphone,
  BarChart3,
  ShieldAlert,
  // Case Study Icons
  ClipboardCheck,
  Stethoscope,
  Briefcase,
  Landmark,
  Sparkles,
  Wrench,
  // Cybersecurity Icons
  Bug,
  CloudAlert,
  Terminal,
  Swords,
  CircuitBoard,
  GraduationCap,
  // Other Mappings if needed for other parts of the app or main sections
  FlaskConical,
  Book,
  ShieldCheck,
  TrendingUp,
  Settings, // Added to map
  Database, // Added to map
  List, // Ensure List is mapped if used by IconComponent elsewhere
  X, // Ensure X is mapped if used by IconComponent elsewhere
  Menu, // Ensure Menu is mapped if used by IconComponent elsewhere
  // Include ChevronDown if it's ever used dynamically by name
  ChevronDown,
};

// Define type for the icon name keys
type IconName = keyof typeof iconMap;

// --- Type definition for IconComponent props ---
// Define the props type directly based on what LucideIcon components accept
type LucideIconComponentProps = {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Allow any other props that might be passed
};

// Helper component to render icon by name
const IconComponent = ({
  name,
  // Use the derived props type
  ...props
}: { name: IconName } & LucideIconComponentProps) => { // Using the derived type here
  const Icon = iconMap[name];

  if (!Icon) {
    console.warn(`Icon "${name}" not found in iconMap.`);
    // Fallback div should also accept props like className and style
    // Added more distinct fallback color for visibility during development
    // Pass props to the fallback div as well
    return <div className={cn("w-4 h-4 inline-block bg-red-400 rounded-full", props.className)} style={props.style} {...props}></div>;
  }
  // Pass remaining props (like className, style, size, color etc.) to the Icon component
  // The Icon component (a LucideIcon) is typed to accept these props, so this is safe.
  return <Icon {...props} />;
};


// Define interface for navigation items
interface NavItem {
  title: string;
  href: string;
  dropdown: boolean;
  items?: {
    title: string;
    href: string;
    icon?: string; // icon name string
  }[];
  // Added optional property for the icon of the main dropdown section
  mainIcon?: IconName; // Use IconName type here
  mainDescription?: string; // Added optional description for the main section box
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    dropdown: false,
  },
  {
    title: "About",
    href: "/about#top",
    dropdown: false,
  },
  {
    title: "Services",
    href: "/services#top",
    dropdown: true,
    mainIcon: "Settings", // Using "Settings" from Lucide
    mainDescription: "Explore all our cutting-edge Enterprise AI Solutions.",
    items: [
      {
        title: "Intelligent Voice Automation",
        href: "/services/intelligent-voice-automation",
        icon: "Mic",
      },
      {
        title: "Social Engagement Automation",
        href: "/services/social-engagement-automation",
        icon: "Share2",
      },
      {
        title: "AI-Powered Lead Intelligence",
        href: "/services/lead-intelligence",
        icon: "BarChart3",
      },
      {
        title: "Interactive AI Chatbots",
        href: "/services/interactive-ai-chatbots",
        icon: "Bot",
      },
      {
        title: "Automated Campaign Orchestration",
        href: "/services/automated-campaign-orchestration",
        icon: "Megaphone",
      },
       {
        title: "AI-Powered Threat Detection",
       href: "/services/threat-detection",
       icon: "ShieldAlert",
       },
    ],
  },
{
  title: "Cybersecurity",
  href: "/cyber-security#top", // Assuming this is a general landing page
  dropdown: true,
  mainIcon: "ShieldCheck", // Using ShieldCheck for the main section icon
  mainDescription: "Explore our comprehensive cybersecurity services.",
  items: [
    {
      title: "Vulnerability Assessment & Pen Testing",
      href: "/cyber-security/vulnerability-assessment",
      icon: "Bug",
    },
    {
      title: "Cloud Security Assessments",
      href: "/cyber-security/cloud-security-assessments",
      icon: "CloudAlert",
    },
    {
      title: "Offensive Security",
      href: "/cyber-security/offensive-security",
      icon: "Terminal",
    },
    {
      title: "Red Teaming Services",
      href: "/cyber-security/red-teaming",
      icon: "Swords",
    },
    {
      title: "IOT/OT Security",
      href: "/cyber-security/iot-security",
      icon: "CircuitBoard",
    },
    {
      title: "vCISO Services",
      href: "/cyber-security/vciso-services",
      icon: "Briefcase",
    },
    {
      title: "Training & Awareness",
      href: "/cyber-security/security-training",
      icon: "GraduationCap",
    },
  ],

  },
  {
    title: "Case Studies",
    href: "/case-studies#top",
    dropdown: true,
    mainIcon: "Database", // Using "Database" from Lucide
    mainDescription: "Discover how our AI solutions deliver measurable results for clients.",
    items: [
      {
        title: "AI-Powered Quality Control System",
        href: "/case-studies/sgf-fab-ai-quality-control",
        icon: "ClipboardCheck",
      },
      {
        title: "AI Voice Assistant for Medical Education",
        href: "/case-studies/doctor-dreams-ai-voice-assistant",
        icon: "Stethoscope",
      },
      {
        title: "AI Chatbot for Workspace Management",
        href: "/case-studies/anthill-iq-smart-workspace",
        icon: "Briefcase",
      },
      {
        title: "AI-Powered Customer Service Revolution",
        href: "/case-studies/financial-services-ai-transformation",
        icon: "Landmark",
      },
      {
        title: "AI-Driven Retail Personalization Engine",
        href: "/case-studies/retail-personalization-engine",
        icon: "Sparkles", // Using the Sparkles icon mapped above
      },
      {
        title: "Healthcare AI Voice Assistant",
        href: "/case-studies/healthcare-voice-assistant",
        icon: "Stethoscope",
      },
      {
        title: "AI-Powered Predictive Maintenance",
        href: "/case-studies/manufacturing-predictive-maintenance",
        icon: "Wrench",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog#top",
    dropdown: false,

  },
  {
    title: "AI Engineers",
    href: "/ai-engineers#top",
    dropdown: false,
  },
  {
    title: "Awards",
    href: "/awards#top",
    dropdown: false,
  },
  {
    title: "Careers",
    href: "/careers#top",
    dropdown: false,
  },
  // === ADDED PRICING HERE ===
  // {
  //   title: "Pricing",
  //   href: "/pricing#top", // Assuming a pricing page exists
  //   dropdown: false,
  // },
  // === END ADDED PRICING ===
  {
    title: "Contact",
    href: "/contact#top",
    dropdown: false,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;
  const currentHash = location.hash;


  const desktopNavRef = useRef<HTMLDivElement>(null);

  // Effect to close desktop dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (window.innerWidth >= 768 && desktopNavRef.current && !desktopNavRef.current.contains(event.target as Node) && openDropdown !== null) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openDropdown]);

  // Effect to handle scrolling on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    if (currentHash) {
      const targetElement = document.getElementById(currentHash.substring(1));
      if (targetElement) {
        requestAnimationFrame(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    } else {
      // Only scroll to top on route changes initiated by React Router (not initial load unless necessary)
      // location.key changes on link clicks
      if (location.key !== 'default') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
         // For initial page load or refresh without hash, just scroll to top instantly
         window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  }, [location, currentHash]);


  // Handle clicks on ANY navigation link originating from the menu/dropdowns
  const handleNavLinkClick = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  };

  // Function to determine if a mobile link is active based on URL
  const isMobileLinkActive = (href: string) => {
    const currentFullUrl = pathname + (currentHash || '');
    if (currentFullUrl === href) return true;
    // For base path matches without hash (e.g., /services matches /services#something)
    // This check is simplified, considering main links might have hashes.
    // A more robust check could see if pathname starts with the href's path part.
     const hrefPath = href.split('#')[0];
     const currentPath = pathname.split('#')[0];
     if (hrefPath !== '/' && currentPath.startsWith(hrefPath) && (currentPath.length === hrefPath.length || (currentPath.length > hrefPath.length && currentPath[hrefPath.length] === '/'))) return true;

    // Special case for home page
    if (href === '/' && pathname === '/' && currentHash === '') return true;

    if (href !== '/' && pathname === href && href.indexOf('#') === -1) return true;
    if (href === '/' && pathname === '/') return true;
    return false;
  };


  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b">
      {/* Increased the max-width of the container div */}
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4"> {/* Changed from container to max-w-screen-2xl */}
        <div className="flex items-center justify-between h-20">
          {/* Logo - positioned first with fixed width */}
          <div className="w-32 md:w-40 lg:w-44 flex-shrink-0 mr-2 md:mr-4 lg:mr-6">
            <RouterLink to="/" onClick={handleNavLinkClick}>
              <img
                src="/thor-signia-logo.png"
                alt="Thor Signia Logo"
                className="h-25 w-auto"
              />
            </RouterLink>
          </div>

          {/* Desktop Navigation - positioned after logo, aligned right */}
          {/* Changed justify-center to justify-end */}
          <div className="hidden md:flex space-x-1 lg:space-x-2 xl:space-x-3 flex-1 justify-end" ref={desktopNavRef}>
            {navItems.map((item) => (
            <div key={item.title} className="relative group h-full flex items-center">
              {item.dropdown ? (
                // Desktop Custom dropdown trigger (button)
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                  className={cn(
                    // Base styles for all desktop links (dropdown or not)
                    "text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors h-full flex items-center px-1 md:px-2 whitespace-nowrap",
                    "hover:text-[#88bf42]",
                    // Active state based on URL match or if the dropdown is open
                    openDropdown === item.title ? "text-[#88bf42] border-b-2 border-[#88bf42]" : "text-foreground border-b-2 border-transparent",
                     "flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  aria-haspopup="menu"
                  aria-expanded={openDropdown === item.title}
                >
                   {/* Text style now only reflects URL activity or default */}
                   <span className={openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"}>
                       {item.title}
                   </span>
                   <ChevronDown className={cn(
                       "h-4 w-4 transition-transform duration-200",
                       openDropdown === item.title ? "rotate-180" : "rotate-0",
                       // Apply hover/active color to arrow as well
                        openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"
                   )} />
                </button>
              ) : (
                // Desktop Standard non-dropdown link
                <RouterLink
                  to={item.href}
                  className={cn(
                     // Base styles for all desktop links (dropdown or not)
                    "text-xs sm:text-sm md:text-base lg:text-lg font-medium transition-colors hover:text-[#88bf42] h-full flex items-center px-1 md:px-2 whitespace-nowrap",
                    // Handle /home#top vs /
                    (item.href === '/' && pathname === '/' && currentHash === '') ? "text-[#88bf42] border-b-2 border-[#88bf42]" : // Exact home match
                    // Check if the current path starts with the item's path, ignoring hash for the base check
                    (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "text-[#88bf42] border-b-2 border-[#88bf42]" : // Partial match for main sections
                    "text-foreground border-b-2 border-transparent",
                     "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                   onClick={handleNavLinkClick} // Close mobile menu if somehow open
                >
                  {item.title}
                </RouterLink>
              )}

              {/* Desktop Custom Dropdown Content Panel */}
              {item.dropdown && openDropdown === item.title && item.items && ( // Ensure items exist
                <div
                  className={cn(
                    // Positioning relative to the trigger button
                    "absolute top-full right-0 mt-0", // Aligned dropdown to the right edge of the button
                    // Adjust horizontal positioning if needed, right-0 makes it align to the right edge of the button's container (which is the button itself)
                    // If the dropdown is too wide and goes off screen left, you might need left-auto right-0 or left-1/2 transform -translate-x-1/2 still depending on desired look.
                    // Keeping left-1/2 -translate-x-1/2 for now as it centers it relative to the trigger, which might be better even if the triggers are on the right.
                    // Let's revert to the centered positioning relative to the trigger button, as right-aligning the whole panel might push it off-screen.
                    // "absolute top-full left-1/2 -translate-x-1/2 mt-0", // Centered relative to the trigger
                    // Let's try anchoring to the right edge but offsetting slightly left to ensure it stays on screen
                     "absolute top-full right-0 mt-0 md:-right-4 lg:-right-6", // Anchor to right edge, add slight padding/offset

                    "w-[700px] max-w-[calc(100vw-32px)]", // Reduced width from 800px to 700px, kept max-width
                    "bg-background border rounded-md shadow-lg p-6", // Increased padding
                    // "absolute top-full left-0 mt-0", // Old positioning
                    // "w-[600px] max-w-[calc(100vw-42px)]", // Old width
                    // "bg-background border rounded-md shadow-lg p-4", // Old padding
                    "z-50 animate-in slide-in-from-top-1 fade-in-0",
                    "flex gap-8" // Increased gap between columns
                  )}
                   role="menu" // ARIA role for accessibility
                   aria-orientation="vertical"
                >
                  {/* Left Column: Main Section Link/Box */}
                  <div className="w-64 flex-shrink-0"> {/* Increased fixed width for the main column */}
                      <RouterLink
                        to={item.href} // Link to the main page (e.g., /services, /case-studies)
                        onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                        className={cn(
                          "flex flex-col h-full p-5 rounded-md", // Increased padding in the main box
                          // Green background with opacity for the main section box
                          "bg-[#88bf42]/10",
                          "hover:bg-[#88bf42]/20",
                          "transition-colors duration-200",
                          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          // Highlight border if any page within this section is active
                           (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "border border-[#88bf42]" : "border border-transparent" // Highlight border
                        )}
                         role="menuitem" // ARIA role
                      >
                        {/* Icon (if available) */}
                        {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                             <IconComponent
                                name={item.mainIcon} // Use IconName type directly
                                className="h-10 w-10 text-[#88bf42] mb-4" // Icon size and color
                              />
                          )}
                        {/* Title */}
                        <div className="text-lg md:text-xl font-semibold text-foreground leading-tight mb-1">{item.title} Overview</div> {/* Added Overview */}
                        {/* Description */}
                         {item.mainDescription && (
                             <p className="text-sm text-muted-foreground leading-snug">{item.mainDescription}</p>
                         )}
                      </RouterLink>
                  </div>

                  {/* Right Column: List of Sub-Items - Now one by one */}
                  <div className="flex-1"> {/* Takes remaining space */}
                     <ul className="flex flex-col gap-y-3"> {/* Changed to flex column, kept vertical gap */}
                       {item.items.map((subItem) => {
                          // Ensure icon name exists
                           const subItemIconName = subItem.icon as IconName | undefined;
                           const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';

                          const currentFullUrl = pathname + (currentHash || '');
                          const isSubItemActive = currentFullUrl === subItem.href;

                         return (
                           <li key={subItem.title}>
                             <RouterLink
                               to={subItem.href}
                               onClick={handleNavLinkClick} // Close dropdown and mobile menu on click
                               className={cn(
                                 "flex items-center gap-3 rounded-sm px-3 py-2 outline-none transition-colors", // Increased gap, slightly more padding
                                 "hover:bg-[#88bf42]/20 hover:text-[#88bf42] focus:bg-[#88bf42]/20 focus:text-[#88bf42]",
                                  // Font size text-base (16px), active is green and bold, inactive is text-foreground
                                  isSubItemActive ? "text-[#88bf42] font-semibold text-base" : "text-foreground text-base"
                               )}
                                role="menuitem" // ARIA role
                             >
                               {hasValidIcon && (
                                  <IconComponent
                                     name={subItemIconName} // Use IconName type directly
                                     className={cn("h-5 w-5 flex-shrink-0 text-muted-foreground")} // Icon size and color (gray)
                                   />
                               )}
                               <span className="leading-snug">{subItem.title}</span> {/* Adjusted leading */}
                             </RouterLink>
                           </li>
                         );
                       })}
                     </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Toggle - Using inline SVG with explicit size */}
        <div className="md:hidden ">
          <Button
            variant="ghost"
            className="h-14 w-14 text-foreground hover:text-[#88bf42]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ height: '40px', width: '40px' }}
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ height: '40px', width: '40px' }}
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container pb-4 md:hidden h-[calc(100vh-112px)] overflow-y-auto">
          <nav className="flex flex-col space-y-4 mt-4">
            {navItems.map((item) => (
              <div key={item.title}>
                {!item.dropdown ? (
                  <RouterLink
                    to={item.href}
                    className={cn(
                      // Mobile link styles - Applied text-base and font-medium as requested for all non-dropdown links
                      "text-base font-medium block py-2",
                      "text-foreground",
                       // Use startsWith for base path matching
                      (item.href === '/' && pathname === '/' && currentHash === '') ? "text-[#88bf42] font-bold" : // Exact home match
                      (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "text-[#88bf42] font-bold" : // Partial match for main sections
                      "text-foreground"
                    )}
                    onClick={handleNavLinkClick}
                  >
                    {item.title}
                  </RouterLink>
                ) : (
                  <div>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                      className={cn(
                        // Mobile dropdown title styles - Kept existing text-lg font-medium
                        "text-lg font-medium w-full text-left py-2",
                        "flex justify-between items-center",
                        "text-foreground",
                        openDropdown === item.title && "font-bold",
                        "hover:text-foreground"
                      )}
                      aria-expanded={openDropdown === item.title}
                    >
                      <span className={openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"}>
                        {item.title}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-6 w-6 transition-transform duration-200 text-muted-foreground",
                          openDropdown === item.title ? "rotate-180" : "rotate-0",
                          openDropdown === item.title ? "text-[#88bf42]" : "text-foreground"
                        )}
                      />
                    </button>
                    {/* Mobile Dropdown Content */}
                    {item.items && openDropdown === item.title && (
                      <div className="mt-2 ml-4 flex flex-col space-y-2">
                        {/* Main Link for Mobile Dropdown Section */}
                        <RouterLink
                          to={item.href}
                          onClick={handleNavLinkClick}
                          className={cn(
                            "text-base font-semibold py-1", // Keep text-base font-semibold for overview link
                            "text-foreground",
                            // Use startsWith for base path matching
                            (item.href !== '/' && pathname.startsWith(item.href.split('#')[0]) && (pathname.length === item.href.split('#')[0].length || pathname[item.href.split('#')[0].length] === '/')) ? "text-[#88bf42]" : "text-foreground",
                            "hover:text-[#88bf42]",
                            "flex items-center gap-2"
                          )}
                        >
                          {item.mainIcon && typeof iconMap[item.mainIcon] !== 'undefined' && (
                            <IconComponent
                              name={item.mainIcon}
                              className="h-4 w-4 text-muted-foreground"
                            />
                          )}
                          <span>{item.title} Overview</span>
                        </RouterLink>

                        {/* Sub-Items for Mobile Dropdown */}
                        {item.items.map((subItem) => {
                          const subItemIconName = subItem.icon as IconName | undefined;
                          const hasValidIcon = subItemIconName && typeof iconMap[subItemIconName] !== 'undefined';

                          
                          return (
                            <RouterLink
                              key={subItem.title}
                              to={subItem.href}
                              className={cn(
                                "text-base py-1", // Keep text-base for sub-items
                                isMobileLinkActive(subItem.href) ? "text-foreground font-semibold" : "text-muted-foreground", // Active state for sub-items
                                "hover:text-[#88bf42]",
                                "flex items-center gap-2"
                              )}
                              onClick={handleNavLinkClick}
                            >
                              {hasValidIcon && (
                                <IconComponent
                                  name={subItemIconName}
                                  className="h-5 w-5 flex-shrink-0 text-muted-foreground"
                                />
                              )}
                              <span>{subItem.title}</span>
                            </RouterLink>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}