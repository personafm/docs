/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const categories = [
  {
    Background: [
      {
        title: "About",
        url: "/background/about",
      },
    ],
  },
  {
    Usage: [
      {
        title: "Usage",
        url: "/usage/usage",
      },
      {
        title: "FAQ",
        url: "/usage/faq",
      },
      {
        title: "Known Bugs",
        url: "/usage/bugs",
      },
    ],
  },
  {
    Developers: [
      {
        title: "Directory Structure",
        url: "/dev/structure",
      },
      {
        title: "Tech Stack",
        url: "/dev/tech",
      },
      {
        title: "Installation",
        url: "/dev/install",
      },
      {
        title: "Web Dependencies",
        url: "/dev/dependencies",
      },
      {
        title: "Running the Project",
        url: "/dev/run",
      },
    ],
  },
  {
    "Editing Documentation": [
      {
        title: "Information",
        url: "/editing/information",
      },
    ],
  },
  {
    "What's Next?": [
      {
        title: "Roadmap",
        url: "/future/roadmap",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="pl-2 pt-2 text-2xl font-semibold">
            <a href="/"> Persona.fm Docs</a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {categories.map((category) => (
          <SidebarGroup key={Object.keys(category)[0]}>
            <SidebarGroupLabel className="text-lg font-semibold">
              {Object.keys(category)[0]}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Object.values(category)[0].map((item: any) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <span className="text-sm font-semibold">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
