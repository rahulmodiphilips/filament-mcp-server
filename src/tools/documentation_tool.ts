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
	home: "https://starwind.dev/",
	"getting-started": "https://starwind.dev/docs/getting-started/",
	cli: "https://starwind.dev/docs/getting-started/cli/",
	installation: "https://starwind.dev/docs/getting-started/installation/",
	theming: "https://starwind.dev/docs/getting-started/theming/",
	components: "https://starwind.dev/docs/components/",
	full: "./storybook-summary.md",
};

// Available components with their documentation URLs and metadata
const COMPONENTS: Record<string, {
  url: string;
  category?: string;
  description?: string;
  props?: Array<{
    name: string;
    type: string;
    defaultValue?: any;
    required?: boolean;
    description?: string;
    options?: string[];
  }>;
}> = {
  // Input Components
  button: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/input-buttons-button--docs",
    category: "Input Components",
    description: "A versatile button component with various states and configurations.",
    props: [
      { name: "variant", type: "string", defaultValue: "primary", description: "The button variant", options: ["primary", "secondary", "tertiary", "danger"] },
      { name: "size", type: "string", defaultValue: "medium", description: "The button size", options: ["small", "medium", "large"] },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disables the button" },
      { name: "fullWidth", type: "boolean", defaultValue: false, description: "Makes the button full width" },
      { name: "label", type: "string", required: true, description: "The button text" },
      { name: "onClick", type: "function", required: true, description: "Function called when button is clicked" },
      { name: "type", type: "string", defaultValue: "button", description: "HTML button type", options: ["button", "submit", "reset"] },
      { name: "square", type: "boolean", defaultValue: false, description: "Makes button square rather than rounded" }
    ]
  },
  checkbox: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/input-checkbox-default--docs",
    category: "Input Components",
    description: "Component for single checkbox or checkbox groups.",
    props: [
      { name: "checked", type: "boolean", defaultValue: false, description: "Whether the checkbox is checked" },
      { name: "defaultChecked", type: "boolean", defaultValue: false, description: "Default checked state" },
      { name: "indeterminate", type: "boolean", defaultValue: false, description: "Whether the checkbox is in indeterminate state" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Whether the checkbox is disabled" },
      { name: "label", type: "string", description: "Label text for the checkbox" },
      { name: "name", type: "string", description: "Name attribute for the checkbox" },
      { name: "value", type: "string", description: "Value attribute for the checkbox" },
      { name: "onChange", type: "function", required: true, description: "Function called when checkbox state changes" }
    ]
  },
  textfield: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/story/input-text-field--default",
    category: "Input Components",
    description: "A standard text input field.",
    props: [
      { name: "value", type: "string", description: "The input value" },
      { name: "defaultValue", type: "string", description: "Default input value" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disables the input" },
      { name: "readOnly", type: "boolean", defaultValue: false, description: "Makes the input read-only" },
      { name: "label", type: "string", description: "Label for the input" },
      { name: "error", type: "string", description: "Error message" },
      { name: "clearable", type: "boolean", defaultValue: false, description: "Whether the field can be cleared" },
      { name: "onChange", type: "function", required: true, description: "Function called when value changes" },
      { name: "width", type: "string", defaultValue: "100%", description: "Width of the input" }
    ]
  },
  card: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/story/layout-card--default",
    category: "Layout Components",
    description: "A versatile card component for containing content.",
    props: [
      { name: "title", type: "string", description: "Card title" },
      { name: "subtitle", type: "string", description: "Card subtitle" },
      { name: "image", type: "string", description: "Image URL" },
      { name: "imagePosition", type: "string", defaultValue: "top", options: ["top", "bottom", "left", "right"], description: "Position of the image" },
      { name: "border", type: "boolean", defaultValue: true, description: "Whether to show border" },
      { name: "shadow", type: "boolean", defaultValue: false, description: "Whether to show shadow" },
      { name: "background", type: "string", defaultValue: "default", options: ["default", "subtle", "transparent"], description: "Background color" },
      { name: "onClick", type: "function", description: "Function called when card is clicked" },
      { name: "href", type: "string", description: "URL if card is a link" }
    ]
  },
  avatar: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/information-avatar--docs",
    category: "Information Components",
    description: "A user or entity avatar component.",
    props: [
      { name: "src", type: "string", description: "Image source URL" },
      { name: "alt", type: "string", description: "Alternative text" },
      { name: "initials", type: "string", description: "Initials to display when no image" },
      { name: "size", type: "string", defaultValue: "medium", options: ["small", "medium", "large"], description: "Size of the avatar" },
      { name: "shape", type: "string", defaultValue: "circle", options: ["circle", "square"], description: "Shape of the avatar" },
      { name: "color", type: "string", description: "Background color when showing initials" },
      { name: "icon", type: "node", description: "Icon to display when no image or initials" },
      { name: "status", type: "string", options: ["online", "away", "busy", "offline"], description: "Status indicator" }
    ]
  },
  dialog: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/feedback-dialog-dialog--docs",
    category: "Feedback Components",
    description: "A modal dialog component.",
    props: [
      { name: "open", type: "boolean", required: true, description: "Whether the dialog is open" },
      { name: "onClose", type: "function", required: true, description: "Function called when dialog is closed" },
      { name: "title", type: "string", description: "Dialog title" },
      { name: "children", type: "node", description: "Dialog content" },
      { name: "actions", type: "array", description: "Array of action buttons" },
      { name: "size", type: "string", defaultValue: "medium", options: ["small", "medium", "large"], description: "Size of the dialog" },
      { name: "fullScreen", type: "boolean", defaultValue: false, description: "Whether the dialog should be full screen" },
      { name: "disableBackdropClick", type: "boolean", defaultValue: false, description: "Whether to disable closing when clicking the backdrop" }
    ]
  },
  // Additional components
  switch: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/input-toggle-switch--docs",
    category: "Input Components",
    description: "A toggle switch component for binary options.",
    props: [
      { name: "checked", type: "boolean", defaultValue: false, description: "Whether the switch is on" },
      { name: "defaultChecked", type: "boolean", defaultValue: false, description: "Default checked state" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Whether the switch is disabled" },
      { name: "label", type: "string", description: "Label text for the switch" },
      { name: "onChange", type: "function", required: true, description: "Function called when state changes" },
      { name: "size", type: "string", defaultValue: "medium", options: ["small", "medium", "large"], description: "The switch size" }
    ]
  },
  table: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/information-data-grid--docs",
    category: "Information Components",
    description: "A data table component for displaying tabular data.",
    props: [
      { name: "data", type: "array", required: true, description: "Array of data objects to display" },
      { name: "columns", type: "array", required: true, description: "Column definitions" },
      { name: "rowKey", type: "string", required: true, description: "Unique key for each row" },
      { name: "loading", type: "boolean", defaultValue: false, description: "Whether the table is in a loading state" },
      { name: "pagination", type: "object", description: "Pagination configuration" },
      { name: "onRowClick", type: "function", description: "Function called when a row is clicked" },
      { name: "emptyText", type: "string", defaultValue: "No data available", description: "Text to display when there's no data" }
    ]
  },
  tabs: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/navigation-tabs--docs",
    category: "Navigation Components",
    description: "A tabbed interface component.",
    props: [
      { name: "activeKey", type: "string", description: "The active tab key" },
      { name: "defaultActiveKey", type: "string", description: "Default active tab key" },
      { name: "tabs", type: "array", required: true, description: "Array of tab objects" },
      { name: "onChange", type: "function", required: true, description: "Function called when active tab changes" },
      { name: "orientation", type: "string", defaultValue: "horizontal", options: ["horizontal", "vertical"], description: "Orientation of the tabs" },
      { name: "variant", type: "string", defaultValue: "default", options: ["default", "pills", "underline"], description: "Variant of the tabs" }
    ]
  },
  tooltip: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/information-tooltip--docs",
    category: "Information Components",
    description: "A tooltip component that displays additional information on hover or focus.",
    props: [
      { name: "content", type: "node", required: true, description: "Tooltip content" },
      { name: "children", type: "node", required: true, description: "The element that triggers the tooltip" },
      { name: "placement", type: "string", defaultValue: "top", options: ["top", "right", "bottom", "left"], description: "Tooltip placement" },
      { name: "delay", type: "number", defaultValue: 0, description: "Delay in ms before showing the tooltip" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Whether the tooltip is disabled" },
      { name: "trigger", type: "string", defaultValue: "hover", options: ["hover", "click", "focus"], description: "How the tooltip is triggered" }
    ]
  },
  textarea: {
    url: "https://filament-storybook.eu1.phsdp.com/main/?path=/docs/input-text-area--docs",
    category: "Input Components",
    description: "A multi-line text input field.",
    props: [
      { name: "value", type: "string", description: "The textarea value" },
      { name: "defaultValue", type: "string", description: "Default textarea value" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
      { name: "disabled", type: "boolean", defaultValue: false, description: "Disables the textarea" },
      { name: "readOnly", type: "boolean", defaultValue: false, description: "Makes the textarea read-only" },
      { name: "label", type: "string", description: "Label for the textarea" },
      { name: "error", type: "string", description: "Error message" },
      { name: "rows", type: "number", defaultValue: 3, description: "Number of visible rows" },
      { name: "resize", type: "string", defaultValue: "none", options: ["none", "vertical", "horizontal", "both"], description: "Resize behavior" },
      { name: "onChange", type: "function", required: true, description: "Function called when value changes" },
      { name: "width", type: "string", defaultValue: "100%", description: "Width of the textarea" }
    ]
  }
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
				response.importExample = `import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from "@filament/react";`;
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
					"Filament is an, styled with Tailwind CSS v4. It provides accessible, customizable components that can be added directly to your projects.";
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
					'import { ComponentName } from "@/filament/react";';
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
