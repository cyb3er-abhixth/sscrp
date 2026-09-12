import { createFileRoute } from "@tanstack/react-router";
import {
CalendarDays,
ClipboardList,
Crown,
Globe,
LucideIcon,
MessageCircle,
Shield,
Star,
Wrench,
} from "lucide-react";

import { Shell, PageHeader } from "@/components/Shell";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/staff")({
head: () => ({
	meta: [
	{ title: "Staff Team — South Sydney City RP" },
	{
		name: "description",
		content:
		"Meet the owners, directors, management, admins, and moderators behind South Sydney City RP.",
	},
	{ property: "og:title", content: "Staff Team — SSCRP" },
	{
		property: "og:description",
		content: "The team keeping South Sydney City fair and active.",
	},
	{ property: "og:url", content: "/staff" },
	],
	links: [{ rel: "canonical", href: "/staff" }],
}),
component: StaffPage,
});


interface StaffMember {
	name: string;
	role: string;
	handle: string;

	timezone?: string;
	discord?: string;
	joined?: string;
	about?: string;
	responsibilities?: string[];
}


interface StaffTier {
	icon: LucideIcon;
	tier: string;
	accent: string;
	members: StaffMember[];
}


const tiers: StaffTier[] = [
{
	icon: Crown,
	tier: "Foundership and Ownership",
	accent: "text-[oklch(0.8_0.15_85)]",

	members: [
	{
		name: "chill_guy_named_ninnies",
		role: "Foundership",
		handle: "@chill_guy_named_ninnies",

		timezone: "Australia/Sydney",
		discord: "chill_guy_named_ninnies",
		joined: "November 2025",

		about:
		"Founder of South Sydney City RP and the driving force behind the community's vision, standards, and long-term direction.",

		responsibilities: [
		"Community leadership",
		"Long-term vision",
		"Staff oversight",
		"Server direction",
		],
	},

	{
		name: "abhinavarun_95535",
		role: "Co-Founder",
		handle: "@abhinavarun_95535",

		timezone: "Asia/Dubai",
		discord: "abhinavarun_95535",
		joined: "December 2025",

		about:
		"Co-Founder focused on the website, server infrastructure, automation, and the technical stability of the community.",

		responsibilities: [
		"Website and platform development",
		"Server systems and automation",
		"Technical support",
		"Community tooling",
		],
	},
	{
		name: "dikagg007",
		role: "Ownership",
		handle: "@dikagg007",
		timezone: "Asia/India",
		discord: "dikagg007",
		joined: "July 2026",

		about:
		"Ownership member focused on technical reliability, automation, and server-side development that supports the wider community.",

		responsibilities: [
			"Server development",
			"Automation and bots",
			"Bug fixing",
			"Technical support",
		],
	},
	],
	},

		{
		icon: Star,
		tier: "Directive Team",
		accent: "text-primary",

		members: [
		{
			name: "sailor200822",
			role: "Director",
			handle: "@sailor200822",
			timezone: "Australia/Sydney",
			discord: "sailor200822",
			joined: "June 2026",

			about: "Director overseeing the broader strategy, department coordination, and asset management across the community.",

			responsibilities: [
				"Server direction",
				"Department oversight",
				"Asset management",
				"Livery management",
				"AFP management",
				"Strategic planning"
			],
		},
		{
			name: "chicken_nuggets353ew",
			role: "Deputy Director",
			handle: "@chicken_nuggets353ew",
			timezone: "Australia/Sydney",
			discord: "chicken_nuggets353ew",
			joined: "May 2026",

			about: "Deputy Director responsible for supporting the Director and managing various aspects of the community's operations.",

			responsibilities: [
				"Supporting the Director",
				"Community engagement",
				"SSU oversight",
				"Staff coordination",
			],
		},
		],
	},

	{
		icon: Star,
		tier: "Management Team",
		accent: "text-primary",

		members: [
		

		
		],
	},





	{
		icon: Shield,
		tier: "Administrators",
		accent: "text-[oklch(0.7_0.18_240)]",

		members: [
		

		{
			name: "tomalan5",
			role: "Senior Administrator",
			handle: "@tomalan5",
			timezone: "Africa/Kenya",
			discord: "tomalan5",
			joined: "August 2026",

			about: "Senior Administrator helping monitor server activity and support administration tasks across the community.",

			responsibilities: [
				"Server administration support",
				"Activity monitoring",
				"Issue response",
				"Staff coordination",
			],
		},
		],
	},


	{
		icon: Wrench,
		tier: "Moderators",
		accent: "text-muted-foreground",

		members: [
			{
				name: "aj_aathiq",
				role: "Moderator",
				handle: "@aj_aathiq",
				timezone: "UAE/Dubai",
				discord: "aj_aathiq",
				joined: "January 2026",

				about: "Moderator focused on maintaining a healthy, safe, and welcoming environment for all players.",

				responsibilities: [
					"Community moderation",
					"Rule enforcement",
					"Player support",
					"Safety monitoring",
				],
			},
			{
				name: "general_tim6",
				role: "Trial Moderator",
				handle: "@general_tim6",
				timezone: "Europe/England",
				discord: "general_tim6",
				joined: "September 2026",

				about: "Trial Moderator focused on maintaining a healthy, safe, and welcoming environment for all players.",

				responsibilities: [
					"Community moderation",
					"Rule enforcement",
					"Player support",
					"Safety monitoring",
				],
			},
			{
				name: "oratilweiscool321",
				role: "Trial Moderator",
				handle: "@oratilweiscool321",
				timezone: "South Africa/Johannesburg",
				discord: "oratilweiscool321",
				joined: "September 2026",

				about: "Trial Moderator focused on maintaining a healthy, safe, and welcoming environment for all players.",

				responsibilities: [
					"Community moderation",
					"Rule enforcement",
					"Player support",
					"Safety monitoring",
				],
			},
		],
	},
];


function StaffPage() {
	return (
		<Shell>

		<PageHeader
			eyebrow="The Team"
			title="Staff Roster"
			subtitle="The crew running South Sydney City — fair, active, and reachable."
		/>


		<section className="mx-auto max-w-6xl space-y-14 px-4 py-16 md:px-6">

			{tiers.map((tier) => (

			<div key={tier.tier}>

				<div className="mb-6 flex items-center gap-3">

				<tier.icon
					className={`${tier.accent} shrink-0`}
					size={20}
				/>


				<h2 className="font-display truncate text-xl sm:text-2xl">
					{tier.tier}
				</h2>


				<div className="hidden h-px flex-1 bg-border sm:block" />


				<div className="text-tracked shrink-0 text-[10px] text-muted-foreground">
					{tier.members.length} on team
				</div>

				</div>



				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">


				{tier.members.map((member) => (

					<div
					key={member.handle}
					className="
					overflow-hidden rounded-md border border-border
					bg-card transition-colors
					hover:border-primary/50
					"
					>

					<div className="p-5">


						<div className="flex items-center gap-4">


						<div
							className="
							flex h-14 w-14 shrink-0
							items-center justify-center
							rounded-md
							bg-gradient-to-br
							from-primary/40
							to-primary/10
							font-display text-2xl
							"
						>
							{member.name.charAt(0)}
						</div>


						<div className="min-w-0">


							<div className="font-display text-lg leading-tight">
							{member.name}
							</div>


							<div className="text-tracked mt-1 text-[10px] text-primary">
							{member.role}
							</div>


							<div className="mt-1 font-mono text-xs text-muted-foreground">
							{member.handle}
							</div>


						</div>


						</div>


					</div>



					<Accordion type="single" collapsible>


						<AccordionItem
						value={member.handle}
						className="border-t border-border border-b-0"
						>


						<AccordionTrigger
							className="
							px-5 py-3
							text-xs
							text-muted-foreground
							hover:no-underline
							"
						>
							View More Info
						</AccordionTrigger>



						<AccordionContent className="px-5 pb-5">


							<div className="space-y-5 text-sm">


							{member.timezone && (
								<InfoRow
								icon={Globe}
								title="Time Zone"
								value={member.timezone}
								/>
							)}



							{member.discord && (
								<InfoRow
								icon={MessageCircle}
								title="Discord"
								value={member.discord}
								/>
							)}



							{member.joined && (
								<InfoRow
								icon={CalendarDays}
								title="Joined"
								value={member.joined}
								/>
							)}



							{member.about && (

								<div>

								<div className="mb-1 text-xs text-muted-foreground">
									About Me
								</div>


								<p className="leading-relaxed">
									{member.about}
								</p>

								</div>

							)}




							{member.responsibilities && (

								<div>

								<div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">

									<ClipboardList size={14} />

									Responsibilities

								</div>


								<ul className="ml-5 list-disc space-y-1">

									{member.responsibilities.map((item) => (

									<li key={item}>
										{item}
									</li>

									))}

								</ul>


								</div>

							)}



							</div>


						</AccordionContent>


						</AccordionItem>


					</Accordion>


					</div>

				))}


				</div>


			</div>

			))}



			<p className="text-center text-xs text-muted-foreground">

			Roster is updated weekly. If you are a staff member and your name is
			missing, please contact management by opening a ticket.

			</p>


		</section>


		</Shell>
	);
	}



	function InfoRow({
	icon: Icon,
	title,
	value,
	}: {
	icon: LucideIcon;
	title: string;
	value: string;
	}) {

	return (

		<div className="flex gap-3">

		<Icon className="mt-0.5 h-4 w-4 text-primary" />


		<div>

			<div className="text-xs text-muted-foreground">
			{title}
			</div>


			<div>
			{value}
			</div>


		</div>

		</div>

	);
}