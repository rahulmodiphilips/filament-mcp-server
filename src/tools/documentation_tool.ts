/**
 * Documentation Tool for the MCP Server
 * Provides main documentation links for Filament
 */

/**
 * Interface for documentation tool arguments
 */
export interface DocumentationArgs {
	/** Type of documentation to retrieve (defaults to 'overview') */
	type?:
		| "overview"
		| "getting-started"
		| "cli"
		| "installation"
		| "theming"
		| "components"
		| "full";
	/** Specific component to get documentation for (only used when type is 'components') */
	component?: string;
}

// Documentation URLs
const DOCS_URLS = {
	home: "https://filament.eu1.phsdp.com/",
	"getting-started": "https://filament.eu1.phsdp.com/docs/getting-started/",
	cli: "https://filament.eu1.phsdp.com/docs/getting-started/cli/",
	installation: "https://filament.eu1.phsdp.com/docs/getting-started/installation/",
	theming: "https://filament.eu1.phsdp.com/docs/getting-started/theming/",
	components: "https://filament.eu1.phsdp.com/docs/components/",
	full: "https://filament.eu1.phsdp.com/llms-full.txt",
};

// Available components with their documentation URLs
const COMPONENTS = {
	avatar: "https://filament.eu1.phsdp.com/docs/components/avatar",
	badge: "https://filament.eu1.phsdp.com/docs/components/badge",
	breadcrumb: "https://filament.eu1.phsdp.com/docs/components/breadcrumb",
	button: "https://filament.eu1.phsdp.com/docs/components/button",
	card: "https://filament.eu1.phsdp.com/docs/components/card",
	checkbox: "https://filament.eu1.phsdp.com/docs/components/checkbox",
	dialog: "https://filament.eu1.phsdp.com/docs/components/dialog",
	dropdown: "https://filament.eu1.phsdp.com/docs/components/dropdown",
	input: "https://filament.eu1.phsdp.com/docs/components/input",
	label: "https://filament.eu1.phsdp.com/docs/components/label",
	pagination: "https://filament.eu1.phsdp.com/docs/components/pagination",
	select: "https://filament.eu1.phsdp.com/docs/components/select",
	switch: "https://filament.eu1.phsdp.com/docs/components/switch",
	table: "https://filament.eu1.phsdp.com/docs/components/table",
	tabs: "https://filament.eu1.phsdp.com/docs/components/tabs",
	textarea: "https://filament.eu1.phsdp.com/docs/components/textarea",
	tooltip: "https://filament.eu1.phsdp.com/docs/components/tooltip",
};

// Define the type for component names
type ComponentName = keyof typeof COMPONENTS;

/**
 * Documentation tool definition
 */
export const documentationTool = {
	name: "get_documentation",
	description: "Returns documentation links for Filament",
	inputSchema: {
		type: "object",
		properties: {
			type: {
				type: "string",
				description: "Type of documentation to retrieve (defaults to overview)",
				enum: [
					"overview",
					"getting-started",
					"cli",
					"installation",
					"theming",
					"components",
					"full",
				],
			},
			component: {
				type: "string",
				description:
					"Specific component to get documentation for (only used when type is components)",
			},
		},
		required: [],
	},
	handler: async (args: DocumentationArgs = {}) => {
		const docType = args.type || "overview";

		// Base documentation response
		const response: Record<string, any> = {
			timestamp: new Date().toISOString(),
		};

		// If requesting component-specific documentation
		if (docType === "components" && args.component) {
			const componentName = args.component.toLowerCase();

			// Check if the component name is a valid key in COMPONENTS
			if (componentName in COMPONENTS && isValidComponentName(componentName)) {
				response.documentationType = "component";
				response.component = componentName;
				response.url = COMPONENTS[componentName as ComponentName];
				response.importExample = `import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from "@/components/filament/${componentName}";`;
			} else {
				response.documentationType = "components";
				response.url = DOCS_URLS.components;
				response.availableComponents = Object.keys(COMPONENTS);
				response.message = `Component '${args.component}' not found. Please choose from the available components list.`;
			}
		}
		// If requesting general documentation
		else {
			response.documentationType = docType;

			// For overview, provide all main links
			if (docType === "overview") {
				response.mainLinks = {
					home: DOCS_URLS.home,
					gettingStarted: DOCS_URLS["getting-started"],
					cli: DOCS_URLS.cli,
					installation: DOCS_URLS.installation,
					theming: DOCS_URLS.theming,
					components: DOCS_URLS.components,
					fullReference: DOCS_URLS.full,
				};
				response.description =
					"Filament is an open-source component library for Astro projects, styled with Tailwind CSS v4. It provides accessible, customizable components that can be added directly to your projects.";
				response.availableComponents = Object.keys(COMPONENTS);
			}
			// For components listing
			else if (docType === "components") {
				response.url = DOCS_URLS.components;
				response.components = Object.entries(COMPONENTS).map(([name, url]) => ({
					name,
					url,
				}));
				response.importPattern =
					'import { ComponentName } from "@filament/react";';
			}
			// For other doc types
			else {
				response.url = DOCS_URLS[docType] || DOCS_URLS.home;
			}
		}

		return response;
	},
};

/**
 * Type guard to check if a string is a valid component name
 * @param key - The key to check
 * @returns True if the key is a valid component name
 */
function isValidComponentName(key: string): key is ComponentName {
	return key in COMPONENTS;
}
