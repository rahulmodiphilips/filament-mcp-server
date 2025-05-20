# Storybook Component Summary

This document provides a summary of the components found in the Storybook library.

## Table of Contents

- [Input Components](#input-components)
  - [Button](#button)
  - [Checkbox](#checkbox)
  - [Toggle Button](#toggle-button)
  - [Menu Button](#menu-button)
  - [Split Button](#split-button)
  - [Text Field](#text-field)
  - [Text Area](#text-area)
  - [Password Field](#password-field)
  - [Date Picker](#date-picker)
  - [Time Picker](#time-picker)
  - [Calendar](#calendar)
  - [Dropdown](#dropdown)
  - [Radio Button](#radio-button)
  - [Toggle Switch](#toggle-switch)
  - [Slider](#slider)
  - [Rating](#rating)
  - [Color Picker](#color-picker)
  - [Search](#search)
  - [Combo Box](#combo-box)
  - [Stepper](#stepper)
  - [File Upload](#file-upload)
  - [Tag Box](#tag-box)
  - [Rich Text Editor](#rich-text-editor)
- [Navigation Components](#navigation-components)
  - [Tabs](#tabs)
  - [Breadcrumbs](#breadcrumbs)
  - [Link](#link)
  - [Nav Link](#nav-link)
  - [Menu](#menu)
  - [Tree View](#tree-view)
  - [Wizard](#wizard)
  - [Page Indicator](#page-indicator)
- [Layout Components](#layout-components)
  - [Card](#card)
  - [Sidebar](#sidebar)
  - [Top Bar](#top-bar)
  - [Bottom Bar](#bottom-bar)
  - [Flex Box](#flex-box)
  - [Gripper](#gripper)
  - [Backdrop](#backdrop)
  - [Divider](#divider)
  - [Expander](#expander)
- [Information Components](#information-components)
  - [Avatar](#avatar)
  - [Badge](#badge)
  - [Icon](#icon)
  - [Label](#label)
  - [List View](#list-view)
  - [Mode Tag](#mode-tag)
  - [Patient Info](#patient-info)
  - [Pictograms](#pictograms)
  - [Popover](#popover)
  - [Tag](#tag)
  - [Tooltip](#tooltip)
  - [Data Grid](#data-grid)
- [Feedback Components](#feedback-components)
  - [Dialog](#dialog)
  - [Notification](#notification)
  - [Progress Bar](#progress-bar)
  - [Spinner](#spinner)
  - [Skeleton](#skeleton)
- [Imaging Components](#imaging-components)
  - [View Container](#view-container)
  - [Image Information](#image-information)
  - [Movie Bar](#movie-bar)
  - [Pictorials](#pictorials)
  - [Toolbar](#toolbar)
- [Chart Components](#chart-components)
  - [Bar Chart](#bar-chart)
  - [Line Chart](#line-chart)
  - [Scatter Plot](#scatter-plot)
  - [Gauge](#gauge)
  - [Hypnogram](#hypnogram)
  - [Sparkline](#sparkline)
  - [Custom Chart](#custom-chart)
- [Typography Components](#typography-components)
  - [Text](#text)
  - [Heading](#heading)
  - [Paragraph](#paragraph)
  - [H1-H6](#h1-h6)
  - [Lang](#lang)

## Input Components

### Button

A versatile button component with various states and configurations.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| variant | string | The button variant | "primary" | No | primary, secondary, tertiary, danger |
| size | string | The button size | "medium" | No | small, medium, large |
| disabled | boolean | Disables the button | false | No | - |
| fullWidth | boolean | Makes the button full width | false | No | - |
| label | string | The button text | - | Yes | - |
| onClick | function | Function called when button is clicked | - | Yes | - |
| type | string | HTML button type | "button" | No | button, submit, reset |
| square | boolean | Makes button square rather than rounded | false | No | - |

#### Basic Usage Example

```jsx
<Button label="Click Me" variant="primary" onClick={() => handleClick()} />
```

### Checkbox

Component for single checkbox or checkbox groups.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| checked | boolean | Whether the checkbox is checked | false | No | - |
| defaultChecked | boolean | Default checked state | false | No | - |
| indeterminate | boolean | Whether the checkbox is in indeterminate state | false | No | - |
| disabled | boolean | Whether the checkbox is disabled | false | No | - |
| label | string | Label text for the checkbox | - | No | - |
| name | string | Name attribute for the checkbox | - | No | - |
| value | string | Value attribute for the checkbox | - | No | - |
| onChange | function | Function called when checkbox state changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Checkbox label="Accept terms" onChange={(e) => setAccepted(e.target.checked)} />
```

### Toggle Button

A button that can be toggled on and off.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| selected | boolean | Whether the button is selected | false | No | - |
| defaultSelected | boolean | Default selected state | false | No | - |
| variant | string | The toggle button variant | "primary" | No | primary, secondary, tertiary |
| size | string | The toggle button size | "medium" | No | small, medium, large |
| disabled | boolean | Disables the toggle button | false | No | - |
| label | string | The button text | - | Yes | - |
| onChange | function | Function called when state changes | - | Yes | - |
| square | boolean | Makes button square rather than rounded | false | No | - |

#### Basic Usage Example

```jsx
<ToggleButton label="Bold" onChange={(selected) => applyBold(selected)} />
```

### Menu Button

A button that opens a dropdown menu when clicked.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| label | string | The button text | - | Yes | - |
| menuItems | array | Array of menu items | - | Yes | - |
| variant | string | The button variant | "primary" | No | primary, secondary, tertiary |
| disabled | boolean | Disables the button | false | No | - |
| placement | string | Placement of the dropdown menu | "bottom" | No | top, bottom, left, right |
| onSelect | function | Function called when menu item is selected | - | Yes | - |
| showArrow | boolean | Whether to show the dropdown arrow | true | No | - |

#### Basic Usage Example

```jsx
<MenuButton 
  label="Options" 
  menuItems={[
    { id: "1", label: "Option 1" },
    { id: "2", label: "Option 2" }
  ]} 
  onSelect={(id) => handleSelect(id)} 
/>
```

### Split Button

A button split into two parts - a main action button and a dropdown menu.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| label | string | The main button text | - | Yes | - |
| menuItems | array | Array of menu items | - | Yes | - |
| variant | string | The button variant | "primary" | No | primary, secondary, tertiary |
| disabled | boolean | Disables the button | false | No | - |
| onClick | function | Function called when main button is clicked | - | Yes | - |
| onSelect | function | Function called when menu item is selected | - | Yes | - |
| width | string | Width of the button | "auto" | No | - |

#### Basic Usage Example

```jsx
<SplitButton 
  label="Save" 
  onClick={() => save()}
  menuItems={[
    { id: "saveAs", label: "Save As..." },
    { id: "saveAll", label: "Save All" }
  ]} 
  onSelect={(id) => handleSaveOption(id)} 
/>
```

### Text Field

A standard text input field.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string | The input value | - | No | - |
| defaultValue | string | Default input value | - | No | - |
| placeholder | string | Placeholder text | - | No | - |
| disabled | boolean | Disables the input | false | No | - |
| readOnly | boolean | Makes the input read-only | false | No | - |
| label | string | Label for the input | - | No | - |
| error | string | Error message | - | No | - |
| clearable | boolean | Whether the field can be cleared | false | No | - |
| onChange | function | Function called when value changes | - | Yes | - |
| width | string | Width of the input | "100%" | No | - |

#### Basic Usage Example

```jsx
<TextField 
  label="Username" 
  placeholder="Enter username" 
  onChange={(e) => setUsername(e.target.value)} 
/>
```

### Text Area

A multi-line text input field.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string | The input value | - | No | - |
| defaultValue | string | Default input value | - | No | - |
| placeholder | string | Placeholder text | - | No | - |
| disabled | boolean | Disables the input | false | No | - |
| readOnly | boolean | Makes the input read-only | false | No | - |
| label | string | Label for the input | - | No | - |
| error | string | Error message | - | No | - |
| rows | number | Number of visible rows | 3 | No | - |
| resize | string | Resize behavior | "none" | No | none, vertical, horizontal, both |
| onChange | function | Function called when value changes | - | Yes | - |
| width | string | Width of the input | "100%" | No | - |

#### Basic Usage Example

```jsx
<TextArea 
  label="Description" 
  placeholder="Enter description" 
  rows={5}
  onChange={(e) => setDescription(e.target.value)} 
/>
```

### Password Field

A text field for password input with show/hide functionality.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string | The password value | - | No | - |
| defaultValue | string | Default password value | - | No | - |
| placeholder | string | Placeholder text | - | No | - |
| disabled | boolean | Disables the input | false | No | - |
| label | string | Label for the input | - | No | - |
| error | string | Error message | - | No | - |
| clearable | boolean | Whether the field can be cleared | false | No | - |
| showPasswordToggle | boolean | Whether to show password toggle | true | No | - |
| onChange | function | Function called when value changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Password 
  label="Password" 
  placeholder="Enter password" 
  onChange={(e) => setPassword(e.target.value)} 
/>
```

### Date Picker

A component for selecting dates.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | Date | The selected date | - | No | - |
| defaultValue | Date | Default selected date | - | No | - |
| placeholder | string | Placeholder text | - | No | - |
| disabled | boolean | Disables the input | false | No | - |
| readOnly | boolean | Makes the input read-only | false | No | - |
| label | string | Label for the input | - | No | - |
| error | string | Error message | - | No | - |
| clearable | boolean | Whether the field can be cleared | false | No | - |
| format | string | Date format | "yyyy-MM-dd" | No | - |
| minDate | Date | Minimum selectable date | - | No | - |
| maxDate | Date | Maximum selectable date | - | No | - |
| onChange | function | Function called when value changes | - | Yes | - |

#### Basic Usage Example

```jsx
<DatePicker 
  label="Start Date" 
  placeholder="Select start date" 
  onChange={(date) => setStartDate(date)} 
/>
```

### Time Picker

A component for selecting times.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string/Date | The selected time | - | No | - |
| defaultValue | string/Date | Default selected time | - | No | - |
| placeholder | string | Placeholder text | - | No | - |
| disabled | boolean | Disables the input | false | No | - |
| readOnly | boolean | Makes the input read-only | false | No | - |
| label | string | Label for the input | - | No | - |
| error | string | Error message | - | No | - |
| clearable | boolean | Whether the field can be cleared | false | No | - |
| format | string | Time format | "HH:mm" | No | - |
| hourCycle | number | Hour cycle (12 or 24) | 24 | No | 12, 24 |
| withSeconds | boolean | Whether to include seconds | false | No | - |
| onChange | function | Function called when value changes | - | Yes | - |

#### Basic Usage Example

```jsx
<TimePicker 
  label="Meeting Time" 
  placeholder="Select time" 
  onChange={(time) => setMeetingTime(time)} 
/>
```

### Calendar

A calendar component for date selection.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | Date | The selected date | - | No | - |
| defaultValue | Date | Default selected date | - | No | - |
| minDate | Date | Minimum selectable date | - | No | - |
| maxDate | Date | Maximum selectable date | - | No | - |
| disabled | boolean | Disables the calendar | false | No | - |
| showWeekNumbers | boolean | Whether to show week numbers | false | No | - |
| locale | string | Locale for the calendar | "en" | No | - |
| onSelect | function | Function called when date is selected | - | Yes | - |
| specialDates | array | Array of special dates to highlight | [] | No | - |
| unavailableDates | array | Array of unavailable dates | [] | No | - |

#### Basic Usage Example

```jsx
<Calendar
  onSelect={(date) => setSelectedDate(date)}
  specialDates={[new Date('2025-05-20')]} 
/>
```

### Dropdown

A dropdown/select component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | any | The selected value | - | No | - |
| defaultValue | any | Default selected value | - | No | - |
| options | array | Array of options | - | Yes | - |
| placeholder | string | Placeholder text | - | No | - |
| disabled | boolean | Disables the dropdown | false | No | - |
| label | string | Label for the dropdown | - | No | - |
| error | string | Error message | - | No | - |
| clearable | boolean | Whether the field can be cleared | false | No | - |
| onChange | function | Function called when value changes | - | Yes | - |
| width | string | Width of the dropdown | "100%" | No | - |

#### Basic Usage Example

```jsx
<Dropdown 
  label="Country" 
  placeholder="Select country" 
  options={[
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" }
  ]} 
  onChange={(value) => setCountry(value)} 
/>
```

### Radio Button

A radio button component for selecting a single option from a group.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| checked | boolean | Whether the radio is checked | false | No | - |
| defaultChecked | boolean | Default checked state | false | No | - |
| disabled | boolean | Whether the radio is disabled | false | No | - |
| label | string | Label text for the radio | - | No | - |
| name | string | Name attribute for the radio group | - | Yes | - |
| value | string | Value attribute for the radio | - | Yes | - |
| onChange | function | Function called when state changes | - | Yes | - |

#### Basic Usage Example

```jsx
<RadioGroup name="gender">
  <RadioButton value="male" label="Male" onChange={(e) => setGender(e.target.value)} />
  <RadioButton value="female" label="Female" onChange={(e) => setGender(e.target.value)} />
</RadioGroup>
```

### Toggle Switch

A switch control for binary options.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| checked | boolean | Whether the switch is on | false | No | - |
| defaultChecked | boolean | Default checked state | false | No | - |
| disabled | boolean | Whether the switch is disabled | false | No | - |
| label | string | Label text for the switch | - | No | - |
| onChange | function | Function called when state changes | - | Yes | - |
| size | string | The switch size | "medium" | No | small, medium, large |

#### Basic Usage Example

```jsx
<ToggleSwitch 
  label="Enable notifications" 
  onChange={(checked) => setNotificationsEnabled(checked)} 
/>
```

### Slider

A component for selecting a value from a range.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | number | The selected value | - | No | - |
| defaultValue | number | Default selected value | - | No | - |
| min | number | Minimum value | 0 | No | - |
| max | number | Maximum value | 100 | No | - |
| step | number | Step size | 1 | No | - |
| disabled | boolean | Disables the slider | false | No | - |
| label | string | Label for the slider | - | No | - |
| showValueLabel | boolean | Whether to show value label | false | No | - |
| discrete | boolean | Whether to show discrete steps | false | No | - |
| onChange | function | Function called when value changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Slider 
  label="Volume" 
  min={0} 
  max={100} 
  defaultValue={50} 
  onChange={(value) => setVolume(value)} 
/>
```

### Rating

A star rating component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | number | The rating value | - | No | - |
| defaultValue | number | Default rating value | - | No | - |
| max | number | Maximum rating | 5 | No | - |
| precision | number | Rating precision | 1 | No | 0.1, 0.5, 1 |
| readOnly | boolean | Makes the rating read-only | false | No | - |
| disabled | boolean | Disables the rating | false | No | - |
| size | string | The rating size | "medium" | No | small, medium, large |
| showValue | boolean | Whether to show value | false | No | - |
| onChange | function | Function called when value changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Rating 
  defaultValue={3} 
  onChange={(value) => setRating(value)} 
/>
```

### Color Picker

A component for selecting colors.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string | The selected color | - | No | - |
| defaultValue | string | Default selected color | "#000000" | No | - |
| format | string | Color format | "hex" | No | hex, rgb, hsl |
| palette | array | Array of preset colors | - | No | - |
| disabled | boolean | Disables the color picker | false | No | - |
| size | string | The color picker size | "medium" | No | small, medium, large |
| onChange | function | Function called when color changes | - | Yes | - |

#### Basic Usage Example

```jsx
<ColorPicker 
  defaultValue="#FF5733" 
  onChange={(color) => setSelectedColor(color)} 
/>
```

### Search

A search input field with suggestions.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string | The search value | - | No | - |
| defaultValue | string | Default search value | - | No | - |
| placeholder | string | Placeholder text | "Search..." | No | - |
| disabled | boolean | Disables the search input | false | No | - |
| results | array | Array of search results | [] | No | - |
| suggestions | array | Array of search suggestions | [] | No | - |
| showNoResults | boolean | Whether to show no results message | true | No | - |
| width | string | Width of the search input | "100%" | No | - |
| onSearch | function | Function called when search is performed | - | Yes | - |
| onChange | function | Function called when value changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Search 
  placeholder="Search products..." 
  onSearch={(query) => performSearch(query)}
  onChange={(e) => setSearchQuery(e.target.value)} 
/>
```

### Combo Box

A combination of text input and dropdown for both selection and free text entry.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | any | The selected value | - | No | - |
| defaultValue | any | Default selected value | - | No | - |
| options | array | Array of options | - | Yes | - |
| placeholder | string | Placeholder text | - | No | - |
| allowCustomValues | boolean | Whether to allow custom values | false | No | - |
| disabled | boolean | Disables the combo box | false | No | - |
| label | string | Label for the combo box | - | No | - |
| error | string | Error message | - | No | - |
| onChange | function | Function called when value changes | - | Yes | - |
| width | string | Width of the combo box | "100%" | No | - |

#### Basic Usage Example

```jsx
<ComboBox 
  label="Browser" 
  placeholder="Select browser" 
  options={[
    { value: "chrome", label: "Chrome" },
    { value: "firefox", label: "Firefox" },
    { value: "safari", label: "Safari" }
  ]} 
  onChange={(value) => setBrowser(value)} 
/>
```

### Stepper

A numeric input with increment/decrement buttons.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | number | The input value | - | No | - |
| defaultValue | number | Default input value | 0 | No | - |
| min | number | Minimum value | - | No | - |
| max | number | Maximum value | - | No | - |
| step | number | Step size | 1 | No | - |
| disabled | boolean | Disables the stepper | false | No | - |
| label | string | Label for the stepper | - | No | - |
| error | string | Error message | - | No | - |
| onChange | function | Function called when value changes | - | Yes | - |
| width | string | Width of the stepper | "100%" | No | - |

#### Basic Usage Example

```jsx
<Stepper 
  label="Quantity" 
  min={1} 
  max={10} 
  defaultValue={1} 
  onChange={(value) => setQuantity(value)} 
/>
```

### File Upload

Components for file uploading.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| accept | string | Accepted file types | - | No | - |
| multiple | boolean | Whether to allow multiple files | false | No | - |
| maxSize | number | Maximum file size in bytes | - | No | - |
| disabled | boolean | Disables the upload | false | No | - |
| onUpload | function | Function called when files are uploaded | - | Yes | - |
| dropzoneText | string | Text shown in the drop zone | "Drop files here or click to upload" | No | - |
| showFileList | boolean | Whether to show file list | true | No | - |

#### Basic Usage Example

```jsx
<FileUpload 
  accept=".jpg,.png,.pdf" 
  multiple={true} 
  onUpload={(files) => handleFileUpload(files)} 
/>
```

### Tag Box

A component for selecting multiple options as tags.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | array | The selected tags | - | No | - |
| defaultValue | array | Default selected tags | [] | No | - |
| options | array | Array of available options | - | Yes | - |
| placeholder | string | Placeholder text | - | No | - |
| allowCustomTags | boolean | Whether to allow custom tags | false | No | - |
| disabled | boolean | Disables the tag box | false | No | - |
| label | string | Label for the tag box | - | No | - |
| error | string | Error message | - | No | - |
| onChange | function | Function called when tags change | - | Yes | - |

#### Basic Usage Example

```jsx
<TagBox 
  label="Skills" 
  placeholder="Add skills" 
  options={[
    { value: "react", label: "React" },
    { value: "angular", label: "Angular" },
    { value: "vue", label: "Vue" }
  ]} 
  onChange={(tags) => setSkills(tags)} 
/>
```

### Rich Text Editor

A WYSIWYG editor for rich text editing.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | string | The editor content | - | No | - |
| defaultValue | string | Default editor content | - | No | - |
| placeholder | string | Placeholder text | - | No | - |
| readOnly | boolean | Makes the editor read-only | false | No | - |
| toolbar | array | Array of toolbar options | - | No | - |
| minHeight | string | Minimum height of the editor | "200px" | No | - |
| onChange | function | Function called when content changes | - | Yes | - |
| onBlur | function | Function called when editor loses focus | - | No | - |

#### Basic Usage Example

```jsx
<RichTextEditor 
  defaultValue="<p>Initial content</p>" 
  onChange={(content) => setEditorContent(content)} 
/>
```

## Navigation Components

### Tabs

A tabbed interface component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| activeKey | string | The active tab key | - | No | - |
| defaultActiveKey | string | Default active tab key | - | No | - |
| tabs | array | Array of tab objects | - | Yes | - |
| orientation | string | Orientation of the tabs | "horizontal" | No | horizontal, vertical |
| alignment | string | Alignment of the tabs | "start" | No | start, center, end |
| fullWidth | boolean | Whether tabs take full width | false | No | - |
| onChange | function | Function called when active tab changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Tabs 
  defaultActiveKey="profile" 
  tabs={[
    { key: "profile", label: "Profile" },
    { key: "settings", label: "Settings" },
    { key: "messages", label: "Messages" }
  ]} 
  onChange={(key) => setActiveTab(key)} 
/>
```

### Breadcrumbs

A breadcrumb navigation component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| items | array | Array of breadcrumb items | - | Yes | - |
| separator | node | Separator between items | "/" | No | - |
| maxItems | number | Maximum number of items to show | - | No | - |
| variant | string | The breadcrumbs variant | "default" | No | default, minimal |
| color | string | Color of the breadcrumbs | "default" | No | default, inverted |
| underline | boolean | Whether to show underline | true | No | - |

#### Basic Usage Example

```jsx
<Breadcrumbs 
  items={[
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Product Details" }
  ]} 
/>
```

### Link

A hyperlink component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| href | string | The URL to link to | - | Yes | - |
| label | string | The link text | - | Yes | - |
| target | string | Target attribute | "_self" | No | _self, _blank, _parent, _top |
| color | string | Color of the link | "primary" | No | primary, secondary, neutral |
| underline | boolean | Whether to show underline | true | No | - |
| variant | string | The link variant | "default" | No | default, button |
| onClick | function | Function called when link is clicked | - | No | - |

#### Basic Usage Example

```jsx
<Link 
  href="/about" 
  label="About Us" 
/>
```

### Nav Link

A navigation link for sidebars and navigation menus.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| href | string | The URL to link to | - | Yes | - |
| label | string | The link text | - | Yes | - |
| icon | node | Icon for the link | - | No | - |
| active | boolean | Whether the link is active | false | No | - |
| disabled | boolean | Whether the link is disabled | false | No | - |
| onClick | function | Function called when link is clicked | - | No | - |

#### Basic Usage Example

```jsx
<NavLink 
  href="/dashboard" 
  label="Dashboard" 
  icon={<DashboardIcon />} 
  active={true} 
/>
```

### Menu

A dropdown menu component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| items | array | Array of menu items | - | Yes | - |
| open | boolean | Whether the menu is open | - | No | - |
| defaultOpen | boolean | Default open state | false | No | - |
| placement | string | Placement of the menu | "bottom" | No | top, bottom, left, right |
| onSelect | function | Function called when item is selected | - | Yes | - |
| onClose | function | Function called when menu is closed | - | No | - |
| sections | array | Array of menu sections | - | No | - |

#### Basic Usage Example

```jsx
<Menu 
  items={[
    { id: "edit", label: "Edit" },
    { id: "delete", label: "Delete" }
  ]} 
  onSelect={(id) => handleMenuAction(id)} 
/>
```

### Tree View

A hierarchical tree component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | array | Tree data structure | - | Yes | - |
| defaultExpandedKeys | array | Default expanded node keys | [] | No | - |
| expandedKeys | array | Controlled expanded node keys | - | No | - |
| selectedKeys | array | Selected node keys | - | No | - |
| multiSelect | boolean | Whether multiple selection is allowed | false | No | - |
| onSelect | function | Function called when node is selected | - | Yes | - |
| onExpand | function | Function called when node is expanded | - | No | - |
| showIcon | boolean | Whether to show node icons | true | No | - |

#### Basic Usage Example

```jsx
<TreeView 
  data={[
    { 
      key: "docs", 
      label: "Documents",
      children: [
        { key: "doc1", label: "Document 1" },
        { key: "doc2", label: "Document 2" }
      ]
    }
  ]} 
  onSelect={(keys) => setSelectedNodes(keys)} 
/>
```

### Wizard

A step-by-step workflow component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| steps | array | Array of wizard steps | - | Yes | - |
| activeStep | number | The active step index | - | No | - |
| defaultActiveStep | number | Default active step index | 0 | No | - |
| orientation | string | Orientation of the wizard | "horizontal" | No | horizontal, vertical |
| linear | boolean | Whether steps must be completed in order | true | No | - |
| centered | boolean | Whether to center the step indicators | false | No | - |
| onNext | function | Function called when moving to next step | - | Yes | - |
| onPrevious | function | Function called when moving to previous step | - | Yes | - |
| onComplete | function | Function called when wizard is completed | - | Yes | - |

#### Basic Usage Example

```jsx
<Wizard 
  steps={[
    { label: "Account", subtitle: "Create account" },
    { label: "Profile", subtitle: "Complete profile" },
    { label: "Review", subtitle: "Review information" }
  ]} 
  onNext={() => moveToNextStep()} 
  onPrevious={() => moveToPreviousStep()} 
  onComplete={() => completeSetup()} 
/>
```

### Page Indicator

A component showing current page position in a multi-page UI.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| count | number | Total number of pages | - | Yes | - |
| current | number | Current page index | - | No | - |
| defaultCurrent | number | Default current page | 0 | No | - |
| variant | string | The indicator variant | "dots" | No | dots, numbers |
| onChange | function | Function called when page changes | - | Yes | - |
| maxVisible | number | Maximum number of visible indicators | - | No | - |
| loop | boolean | Whether to enable looping | false | No | - |

#### Basic Usage Example

```jsx
<PageIndicator 
  count={5} 
  defaultCurrent={0} 
  onChange={(page) => setCurrentPage(page)} 
/>
```

## Layout Components

### Card

A versatile card component for containing content.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| title | string | Card title | - | No | - |
| subtitle | string | Card subtitle | - | No | - |
| image | string | Image URL | - | No | - |
| imagePosition | string | Position of the image | "top" | No | top, bottom, left, right |
| border | boolean | Whether to show border | true | No | - |
| shadow | boolean | Whether to show shadow | false | No | - |
| background | string | Background color | "default" | No | default, subtle, transparent |
| onClick | function | Function called when card is clicked | - | No | - |
| href | string | URL if card is a link | - | No | - |

#### Basic Usage Example

```jsx
<Card 
  title="Feature Highlight" 
  subtitle="Learn more about this feature" 
  image="/images/feature.jpg" 
  onClick={() => showDetails()} 
/>
```

### Sidebar

A sidebar component for navigation and actions.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| open | boolean | Whether the sidebar is open | - | No | - |
| defaultOpen | boolean | Default open state | true | No | - |
| position | string | Position of the sidebar | "left" | No | left, right |
| collapsible | boolean | Whether the sidebar can be collapsed | false | No | - |
| modal | boolean | Whether the sidebar is modal | false | No | - |
| width | string | Width of the sidebar | "240px" | No | - |
| background | string | Background color | "default" | No | default, subtle, transparent |
| onToggle | function | Function called when sidebar is toggled | - | No | - |

#### Basic Usage Example

```jsx
<Sidebar 
  defaultOpen={true} 
  collapsible={true} 
  onToggle={(open) => setSidebarOpen(open)} 
>
  {/* Navigation content */}
</Sidebar>
```

### Top Bar

A top navigation bar component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| title | string | Bar title | - | No | - |
| logo | node | Logo component | - | No | - |
| actions | array | Array of action buttons | - | No | - |
| background | string | Background color | "default" | No | default, subtle, transparent |
| border | boolean | Whether to show border | false | No | - |
| fixed | boolean | Whether the bar is fixed | false | No | - |
| showMenuButton | boolean | Whether to show menu button | false | No | - |
| onMenuClick | function | Function called when menu button is clicked | - | No | - |

#### Basic Usage Example

```jsx
<TopBar 
  title="Application Name" 
  logo={<AppLogo />} 
  actions={[
    { icon: <SearchIcon />, onClick: () => showSearch() },
    { icon: <SettingsIcon />, onClick: () => showSettings() }
  ]} 
/>
```

### Bottom Bar

A bottom navigation/action bar component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| items | array | Array of navigation items | - | No | - |
| actions | array | Array of action buttons | - | No | - |
| background | string | Background color | "default" | No | default, subtle, transparent |
| translucent | boolean | Whether the bar is translucent | false | No | - |
| fixed | boolean | Whether the bar is fixed | true | No | - |
| activeItem | string | Key of the active item | - | No | - |
| onChange | function | Function called when active item changes | - | No | - |

#### Basic Usage Example

```jsx
<BottomBar 
  items={[
    { key: "home", label: "Home", icon: <HomeIcon /> },
    { key: "search", label: "Search", icon: <SearchIcon /> },
    { key: "profile", label: "Profile", icon: <ProfileIcon /> }
  ]} 
  onChange={(key) => setActiveNavItem(key)} 
/>
```

### Flex Box

A flexible layout component using CSS flexbox.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| direction | string | Flex direction | "row" | No | row, column, row-reverse, column-reverse |
| wrap | string | Flex wrap | "nowrap" | No | nowrap, wrap, wrap-reverse |
| justifyContent | string | Justify content | "flex-start" | No | flex-start, flex-end, center, space-between, space-around |
| alignItems | string | Align items | "stretch" | No | flex-start, flex-end, center, baseline, stretch |
| gap | number/string | Gap between items | 0 | No | - |
| flex | string | Flex property | - | No | - |
| width | string | Width of the container | "100%" | No | - |
| height | string | Height of the container | "auto" | No | - |

#### Basic Usage Example

```jsx
<FlexBox 
  direction="row" 
  justifyContent="space-between" 
  alignItems="center" 
  gap="16px" 
>
  {/* Flex items */}
</FlexBox>
```

### Gripper

A handle component for draggable UI elements.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| orientation | string | Orientation of the gripper | "horizontal" | No | horizontal, vertical |
| size | string | Size of the gripper | "medium" | No | small, medium, large |
| onDragStart | function | Function called when drag starts | - | No | - |
| onDrag | function | Function called during dragging | - | No | - |
| onDragEnd | function | Function called when drag ends | - | No | - |

#### Basic Usage Example

```jsx
<Gripper 
  orientation="horizontal" 
  onDragStart={() => startResize()} 
  onDrag={(e) => handleResize(e)} 
  onDragEnd={() => finishResize()} 
/>
```

### Backdrop

A fullscreen overlay component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| open | boolean | Whether the backdrop is visible | - | Yes | - |
| color | string | Backdrop color | "default" | No | default, light, dark |
| opacity | number | Backdrop opacity | 0.5 | No | - |
| blur | boolean | Whether to apply blur effect | false | No | - |
| onClick | function | Function called when backdrop is clicked | - | No | - |
| zIndex | number | Z-index of the backdrop | 1000 | No | - |

#### Basic Usage Example

```jsx
<Backdrop 
  open={true} 
  onClick={() => closeModal()} 
/>
```

### Divider

A horizontal or vertical dividing line.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| orientation | string | Orientation of the divider | "horizontal" | No | horizontal, vertical |
| variant | string | Visual variant | "default" | No | default, subtle |
| margin | string/number | Margin around divider | 0 | No | - |
| width | string | Width (for vertical) | "1px" | No | - |
| height | string | Height (for horizontal) | "1px" | No | - |

#### Basic Usage Example

```jsx
<Divider orientation="horizontal" margin="16px 0" />
```

### Expander

A collapsible content section.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| title | string | Expander header title | - | Yes | - |
| subtitle | string | Expander header subtitle | - | No | - |
| expanded | boolean | Whether the expander is expanded | - | No | - |
| defaultExpanded | boolean | Default expanded state | false | No | - |
| disabled | boolean | Whether the expander is disabled | false | No | - |
| icon | node | Custom icon | - | No | - |
| onChange | function | Function called when expanded state changes | - | Yes | - |

#### Basic Usage Example

```jsx
<Expander 
  title="Additional Information" 
  defaultExpanded={false} 
  onChange={(expanded) => setInfoExpanded(expanded)} 
>
  {/* Expandable content */}
</Expander>
```

## Information Components

### Avatar

A user or entity avatar component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| src | string | Image source URL | - | No | - |
| alt | string | Alternative text | - | No | - |
| initials | string | Initials to display when no image | - | No | - |
| size | string | Size of the avatar | "medium" | No | small, medium, large |
| shape | string | Shape of the avatar | "circle" | No | circle, square |
| color | string | Background color when showing initials | - | No | - |
| icon | node | Icon to display when no image or initials | - | No | - |
| status | string | Status indicator | - | No | online, away, busy, offline |

#### Basic Usage Example

```jsx
<Avatar 
  src="/images/profile.jpg" 
  alt="User Profile" 
  size="medium" 
  status="online" 
/>
```

### Badge

A numeric or status indicator badge.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| count | number | Badge count | - | No | - |
| content | node | Custom badge content | - | No | - |
| maxCount | number | Maximum count to display | 99 | No | - |
| dot | boolean | Whether to show a dot instead of count | false | No | - |
| showZero | boolean | Whether to show when count is zero | false | No | - |
| variant | string | Badge variant | "default" | No | default, outline |
| color | string | Badge color | "primary" | No | primary, success, warning, error |
| position | string | Position when used with children | "top-right" | No | top-right, top-left, bottom-right, bottom-left |

#### Basic Usage Example

```jsx
<Badge count={5} color="primary">
  <NotificationIcon />
</Badge>
```

### Icon

A vector icon component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| name | string | Icon name | - | Yes | - |
| size | string/number | Icon size | "medium" | No | small, medium, large |
| color | string | Icon color | "current" | No | current, primary, secondary, etc. |
| weight | string | Icon weight/thickness | "regular" | No | light, regular, bold |
| className | string | Additional CSS class | - | No | - |

#### Basic Usage Example

```jsx
<Icon 
  name="settings" 
  size="medium" 
  color="primary" 
/>
```

### Label

A text label component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| text | string | Label text | - | Yes | - |
| variant | string | Label variant | "default" | No | default, outline, filled |
| color | string | Label color | "default" | No | default, primary, success, warning, error |
| size | string | Label size | "medium" | No | small, medium, large |
| icon | node | Icon to display with label | - | No | - |

#### Basic Usage Example

```jsx
<Label 
  text="New Feature" 
  variant="filled" 
  color="primary" 
/>
```

### List View

A component for displaying lists of data.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| items | array | Array of list items | - | Yes | - |
| selectionMode | string | Selection mode | "none" | No | none, single, multiple |
| selectedKeys | array | Selected item keys | - | No | - |
| defaultSelectedKeys | array | Default selected item keys | [] | No | - |
| onSelectionChange | function | Function called when selection changes | - | No | - |
| showIcons | boolean | Whether to show item icons | false | No | - |
| showSuffix | boolean | Whether to show item suffix | false | No | - |
| itemHeight | number | Height of list items | - | No | - |

#### Basic Usage Example

```jsx
<ListView 
  items={[
    { key: "1", label: "Item 1", icon: <FileIcon /> },
    { key: "2", label: "Item 2", icon: <FileIcon /> },
    { key: "3", label: "Item 3", icon: <FileIcon /> }
  ]} 
  selectionMode="single" 
  onSelectionChange={(keys) => setSelectedItems(keys)} 
/>
```

### Mode Tag

A component indicating system mode or state.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| text | string | Mode text | - | Yes | - |
| variant | string | Visual variant | "default" | No | default, outline, minimal |
| signal | string | Signal color | - | No | success, caution, warning, error |
| icon | node | Icon to display | - | No | - |
| onClick | function | Function called when tag is clicked | - | No | - |
| popover | node | Content of popover when clicked | - | No | - |

#### Basic Usage Example

```jsx
<ModeTag 
  text="Test Mode" 
  signal="warning" 
  icon={<TestIcon />} 
/>
```

### Patient Info

A component displaying patient information.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| patient | object | Patient data object | - | Yes | - |
| showAvatar | boolean | Whether to show patient avatar | false | No | - |
| showAge | boolean | Whether to show patient age | true | No | - |
| showDOB | boolean | Whether to show date of birth | true | No | - |
| showPatientID | boolean | Whether to show patient ID | true | No | - |
| variant | string | Display variant | "default" | No | default, simple, acquisition |

#### Basic Usage Example

```jsx
<PatientInfo 
  patient={{
    id: "P12345",
    name: "John Smith",
    gender: "Male",
    dob: "1975-05-15",
    age: 50
  }} 
  showAvatar={true} 
/>
```

### Pictograms

Larger, more detailed visual elements.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| name | string | Pictogram name | - | Yes | - |
| size | string | Pictogram size | "medium" | No | small, medium, large |
| color | string | Pictogram color | "current" | No | - |
| className | string | Additional CSS class | - | No | - |

#### Basic Usage Example

```jsx
<Pictogram 
  name="health-report" 
  size="large" 
/>
```

### Popover

A popup content component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| open | boolean | Whether the popover is open | - | No | - |
| defaultOpen | boolean | Default open state | false | No | - |
| title | string | Popover title | - | No | - |
| content | node | Popover content | - | Yes | - |
| placement | string | Placement of the popover | "bottom" | No | top, bottom, left, right |
| trigger | string | Trigger for the popover | "click" | No | click, hover, focus, manual |
| showCloseButton | boolean | Whether to show close button | false | No | - |
| onOpenChange | function | Function called when open state changes | - | No | - |

#### Basic Usage Example

```jsx
<Popover 
  title="Information" 
  content="Additional details about this item." 
  trigger="hover" 
>
  <InfoIcon />
</Popover>
```

### Tag

A label component for categorization.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| label | string | Tag text | - | Yes | - |
| color | string | Tag color | "default" | No | default, primary, success, warning, error |
| size | string | Tag size | "medium" | No | small, medium, large |
| closable | boolean | Whether the tag can be closed | false | No | - |
| onClose | function | Function called when tag is closed | - | No | - |
| avatar | node | Avatar component for the tag | - | No | - |
| onClick | function | Function called when tag is clicked | - | No | - |
| selectable | boolean | Whether the tag is selectable | false | No | - |
| selected | boolean | Whether the tag is selected | false | No | - |

#### Basic Usage Example

```jsx
<Tag 
  label="Frontend" 
  color="primary" 
  closable={true} 
  onClose={() => removeTag('frontend')} 
/>
```

### Tooltip

A small informational popup.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| content | node | Tooltip content | - | Yes | - |
| placement | string | Placement of the tooltip | "top" | No | top, bottom, left, right |
| title | string | Tooltip title | - | No | - |
| delay | number | Delay before showing (ms) | 200 | No | - |
| showArrow | boolean | Whether to show arrow | true | No | - |
| maxWidth | string | Maximum width of tooltip | "300px" | No | - |
| trigger | string | Trigger for the tooltip | "hover" | No | hover, focus, click, manual |

#### Basic Usage Example

```jsx
<Tooltip content="Perform this action">
  <ActionButton />
</Tooltip>
```

### Data Grid

A component for displaying tabular data.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| columns | array | Column definitions | - | Yes | - |
| data | array | Grid data | - | Yes | - |
| selectionMode | string | Selection mode | "none" | No | none, single, multiple |
| selectedRows | array | Selected row keys | - | No | - |
| defaultSelectedRows | array | Default selected row keys | [] | No | - |
| onSelectionChange | function | Function called when selection changes | - | No | - |
| sortable | boolean | Whether columns are sortable | false | No | - |
| filterable | boolean | Whether columns are filterable | false | No | - |
| resizable | boolean | Whether columns are resizable | false | No | - |
| pageSize | number | Number of rows per page | - | No | - |
| loading | boolean | Whether grid is in loading state | false | No | - |
| emptyText | string | Text to show when data is empty | "No data" | No | - |

#### Basic Usage Example

```jsx
<DataGrid 
  columns={[
    { key: "id", title: "ID", width: 80 },
    { key: "name", title: "Name", width: 200 },
    { key: "email", title: "Email", width: 250 }
  ]} 
  data={users} 
  selectionMode="multiple" 
  sortable={true} 
  onSelectionChange={(keys) => setSelectedUsers(keys)} 
/>
```

## Feedback Components

### Dialog

A modal dialog component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| open | boolean | Whether the dialog is open | - | Yes | - |
| title | string | Dialog title | - | No | - |
| size | string | Dialog size | "medium" | No | small, medium, large, fullscreen |
| modal | boolean | Whether the dialog is modal | true | No | - |
| showCloseButton | boolean | Whether to show close button | true | No | - |
| resizable | boolean | Whether the dialog is resizable | false | No | - |
| actions | array | Action buttons for the dialog | - | No | - |
| onClose | function | Function called when dialog is closed | - | Yes | - |
| signal | string | Signal color for the dialog | - | No | success, caution, warning, error |

#### Basic Usage Example

```jsx
<Dialog 
  open={true} 
  title="Confirm Action" 
  onClose={() => setDialogOpen(false)} 
  actions={[
    { label: "Cancel", variant: "secondary", onClick: () => setDialogOpen(false) },
    { label: "Confirm", variant: "primary", onClick: () => confirmAction() }
  ]} 
>
  <p>Are you sure you want to proceed?</p>
</Dialog>
```

### Notification

A notification/toast message component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| type | string | Notification type | "toast" | No | toast, banner, inline |
| title | string | Notification title | - | No | - |
| content | string | Notification content | - | Yes | - |
| signal | string | Signal color | - | No | success, caution, warning, error |
| position | string | Position on screen | "top-right" | No | top-right, top-center, top-left, bottom-right, bottom-center, bottom-left |
| timeout | number | Auto-close timeout (ms) | 5000 | No | - |
| showCloseButton | boolean | Whether to show close button | true | No | - |
| onClose | function | Function called when notification is closed | - | No | - |

#### Basic Usage Example

```jsx
<Notification 
  type="toast" 
  title="Success" 
  content="Operation completed successfully." 
  signal="success" 
  timeout={3000} 
/>
```

### Progress Bar

A progress indicator component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | number | Current progress value | - | No | - |
| min | number | Minimum value | 0 | No | - |
| max | number | Maximum value | 100 | No | - |
| indeterminate | boolean | Whether progress is indeterminate | false | No | - |
| buffer | number | Buffer progress value | - | No | - |
| signal | string | Signal color | - | No | success, caution, warning, error |
| label | string | Progress label | - | No | - |
| animated | boolean | Whether to animate the progress | true | No | - |
| size | string | Size of the progress bar | "medium" | No | small, medium, large |

#### Basic Usage Example

```jsx
<ProgressBar 
  value={65} 
  label="Uploading..." 
  buffer={75} 
/>
```

### Spinner

A loading indicator component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| size | string | Spinner size | "medium" | No | small, medium, large |
| color | string | Spinner color | "primary" | No | primary, secondary, neutral |
| label | string | Loading text | - | No | - |
| labelPosition | string | Position of the label | "right" | No | top, right, bottom, left |

#### Basic Usage Example

```jsx
<Spinner 
  size="medium" 
  label="Loading..." 
/>
```

### Skeleton

A placeholder loading component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| variant | string | Skeleton variant | "text" | No | text, rectangular, circular |
| width | string/number | Width of the skeleton | - | No | - |
| height | string/number | Height of the skeleton | - | No | - |
| animation | string | Animation type | "pulse" | No | pulse, wave, none |
| count | number | Number of skeleton items | 1 | No | - |
| circle | boolean | Whether the skeleton is circular | false | No | - |

#### Basic Usage Example

```jsx
<Skeleton 
  variant="text" 
  width="100%" 
  count={3} 
/>
```

## Imaging Components

### View Container

A container for viewing medical images.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| image | string | Image source URL | - | Yes | - |
| title | string | View title | - | No | - |
| toolbar | node | Toolbar component | - | No | - |
| info | object | Image information | - | No | - |
| selectable | boolean | Whether the view is selectable | false | No | - |
| selected | boolean | Whether the view is selected | false | No | - |
| onSelect | function | Function called when view is selected | - | No | - |
| multiView | boolean | Whether to show multiple viewports | false | No | - |
| focus | boolean | Whether the view has focus | false | No | - |

#### Basic Usage Example

```jsx
<ViewContainer 
  image="/images/scan.jpg" 
  title="Brain CT Scan" 
  info={{ 
    patientId: "P12345", 
    studyDate: "2025-01-15" 
  }} 
/>
```

### Image Information

A component displaying metadata about a medical image.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| patient | object | Patient information | - | No | - |
| study | object | Study information | - | No | - |
| series | object | Series information | - | No | - |
| instance | object | Instance information | - | No | - |
| acquisition | object | Acquisition information | - | No | - |
| compact | boolean | Whether to show compact view | false | No | - |
| showLabel | boolean | Whether to show labels | true | No | - |

#### Basic Usage Example

```jsx
<ImageInformation 
  patient={{ id: "P12345", name: "John Smith" }} 
  study={{ id: "S12345", description: "Brain MRI" }}
  series={{ date: "2025-01-15", modality: "MR" }}
/>
```

### Movie Bar

A control bar for navigating image sequences.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| frames | number | Total number of frames | - | Yes | - |
| currentFrame | number | Current frame index | - | No | - |
| defaultFrame | number | Default frame index | 0 | No | - |
| fps | number | Frames per second for playback | 10 | No | - |
| playing | boolean | Whether playback is active | false | No | - |
| loop | boolean | Whether to loop playback | false | No | - |
| showSlider | boolean | Whether to show position slider | true | No | - |
| showFrameSelector | boolean | Whether to show frame selector | false | No | - |
| onFrameChange | function | Function called when frame changes | - | Yes | - |
| onPlayingChange | function | Function called when playing state changes | - | No | - |

#### Basic Usage Example

```jsx
<MovieBar 
  frames={120} 
  defaultFrame={0} 
  fps={15} 
  showSlider={true} 
  onFrameChange={(frame) => setCurrentFrame(frame)} 
/>
```

### Pictorials

A component for displaying and selecting anatomical pictorials.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| items | array | Array of pictorial items | - | Yes | - |
| selectionMode | string | Selection mode | "none" | No | none, single, multiple |
| selectedKeys | array | Selected item keys | - | No | - |
| defaultSelectedKeys | array | Default selected item keys | [] | No | - |
| onSelectionChange | function | Function called when selection changes | - | No | - |
| size | string | Size of pictorials | "medium" | No | compact, medium, large |
| showStatus | boolean | Whether to show status indicators | false | No | - |
| sections | array | Array of section groups | - | No | - |

#### Basic Usage Example

```jsx
<Pictorials 
  items={[
    { key: "head", image: "/pictorials/head.svg", label: "Head" },
    { key: "chest", image: "/pictorials/chest.svg", label: "Chest" },
    { key: "abdomen", image: "/pictorials/abdomen.svg", label: "Abdomen" }
  ]} 
  selectionMode="single" 
  onSelectionChange={(keys) => setSelectedArea(keys[0])} 
/>
```

### Toolbar

A component for grouping control actions in imaging applications.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| items | array | Array of toolbar items | - | Yes | - |
| orientation | string | Toolbar orientation | "horizontal" | No | horizontal, vertical |
| background | string | Background color | "default" | No | default, subtle, transparent |
| overflow | string | Overflow behavior | "wrap" | No | wrap, scroll, dropdown |
| draggable | boolean | Whether the toolbar is draggable | false | No | - |
| collapsible | boolean | Whether the toolbar is collapsible | false | No | - |
| defaultCollapsed | boolean | Default collapsed state | false | No | - |
| extended | boolean | Whether the toolbar is extended | false | No | - |

#### Basic Usage Example

```jsx
<Toolbar 
  items={[
    { key: "zoom", icon: <ZoomIcon />, onClick: () => activateTool('zoom') },
    { key: "pan", icon: <PanIcon />, onClick: () => activateTool('pan') },
    { key: "measure", icon: <MeasureIcon />, onClick: () => activateTool('measure') }
  ]} 
  background="subtle" 
  overflow="dropdown" 
/>
```

## Chart Components

### Bar Chart

A component for displaying data as bars.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | array | Chart data | - | Yes | - |
| xAxisKey | string | Data key for X axis | - | Yes | - |
| yAxisKey | string | Data key for Y axis | - | Yes | - |
| title | string | Chart title | - | No | - |
| subtitle | string | Chart subtitle | - | No | - |
| layout | string | Chart layout | "vertical" | No | vertical, horizontal |
| stacked | boolean | Whether bars are stacked | false | No | - |
| grouped | boolean | Whether bars are grouped | false | No | - |
| palette | string | Color palette | "qualitative" | No | qualitative, sequential, diverging |
| customPalette | array | Custom color array | - | No | - |
| legendPosition | string | Position of the legend | "bottom" | No | top, right, bottom, left, none |
| xAxisLabel | string | Label for X axis | - | No | - |
| yAxisLabel | string | Label for Y axis | - | No | - |
| animation | boolean | Whether to animate the chart | true | No | - |

#### Basic Usage Example

```jsx
<BarChart 
  data={[
    { category: "Product A", value: 45 },
    { category: "Product B", value: 75 },
    { category: "Product C", value: 30 }
  ]} 
  xAxisKey="category" 
  yAxisKey="value" 
  title="Product Sales" 
/>
```

### Line Chart

A component for displaying data as lines.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | array | Chart data | - | Yes | - |
| xAxisKey | string | Data key for X axis | - | Yes | - |
| yAxisKey | string/array | Data key(s) for Y axis | - | Yes | - |
| title | string | Chart title | - | No | - |
| subtitle | string | Chart subtitle | - | No | - |
| showMarkers | boolean | Whether to show data points | true | No | - |
| palette | string | Color palette | "qualitative" | No | qualitative, sequential, diverging |
| customPalette | array | Custom color array | - | No | - |
| legendPosition | string | Position of the legend | "bottom" | No | top, right, bottom, left, none |
| xAxisLabel | string | Label for X axis | - | No | - |
| yAxisLabel | string | Label for Y axis | - | No | - |
| animation | boolean | Whether to animate the chart | true | No | - |
| referenceAreas | array | Reference areas to highlight | - | No | - |

#### Basic Usage Example

```jsx
<LineChart 
  data={[
    { month: "Jan", sales: 65, profit: 30 },
    { month: "Feb", sales: 78, profit: 42 },
    { month: "Mar", sales: 90, profit: 50 }
  ]} 
  xAxisKey="month" 
  yAxisKey={["sales", "profit"]} 
  title="Monthly Performance" 
/>
```

### Scatter Plot

A component for displaying data as points.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | array | Chart data | - | Yes | - |
| xAxisKey | string | Data key for X axis | - | Yes | - |
| yAxisKey | string | Data key for Y axis | - | Yes | - |
| zAxisKey | string | Data key for point size | - | No | - |
| groupKey | string | Data key for grouping | - | No | - |
| title | string | Chart title | - | No | - |
| subtitle | string | Chart subtitle | - | No | - |
| palette | string | Color palette | "qualitative" | No | qualitative, sequential, diverging |
| customPalette | array | Custom color array | - | No | - |
| legendPosition | string | Position of the legend | "bottom" | No | top, right, bottom, left, none |
| xAxisLabel | string | Label for X axis | - | No | - |
| yAxisLabel | string | Label for Y axis | - | No | - |
| animation | boolean | Whether to animate the chart | true | No | - |
| referenceLines | array | Reference lines to display | - | No | - |

#### Basic Usage Example

```jsx
<ScatterPlot 
  data={[
    { height: 170, weight: 65, age: 25, gender: "male" },
    { height: 160, weight: 55, age: 30, gender: "female" },
    { height: 180, weight: 75, age: 40, gender: "male" }
  ]} 
  xAxisKey="height" 
  yAxisKey="weight" 
  zAxisKey="age" 
  groupKey="gender" 
  title="Height vs Weight" 
/>
```

### Gauge

A circular gauge or dial component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| value | number | Current value | - | Yes | - |
| min | number | Minimum value | 0 | No | - |
| max | number | Maximum value | 100 | No | - |
| title | string | Gauge title | - | No | - |
| subtitle | string | Gauge subtitle | - | No | - |
| shape | string | Gauge shape | "open" | No | open, closed |
| showValue | boolean | Whether to show value | true | No | - |
| valueFormatter | function | Function to format the value | - | No | - |
| showScale | boolean | Whether to show scale | true | No | - |
| showTickLines | boolean | Whether to show tick lines | true | No | - |
| showTickLabels | boolean | Whether to show tick labels | true | No | - |
| icon | node | Icon to display | - | No | - |
| description | string | Description text | - | No | - |
| signal | string | Signal color | - | No | success, caution, warning, error |

#### Basic Usage Example

```jsx
<Gauge 
  value={65} 
  min={0} 
  max={100} 
  title="CPU Usage" 
  shape="closed" 
  signal="warning" 
/>
```

### Hypnogram

A specialized chart for sleep stage visualization.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | array | Sleep stage data | - | Yes | - |
| timeKey | string | Data key for time | - | Yes | - |
| stageKey | string | Data key for sleep stage | - | Yes | - |
| title | string | Chart title | - | No | - |
| height | number | Chart height | 200 | No | - |
| emphasize | boolean | Whether to emphasize stages | false | No | - |
| simplified | boolean | Whether to use simplified view | false | No | - |
| timeRange | array | Time range to display | - | No | - |
| customTicks | array | Custom time ticks | - | No | - |

#### Basic Usage Example

```jsx
<Hypnogram 
  data={[
    { time: "22:00", stage: "awake" },
    { time: "22:30", stage: "light" },
    { time: "23:00", stage: "deep" },
    // ...more data points
  ]} 
  timeKey="time" 
  stageKey="stage" 
  title="Sleep Stages" 
/>
```

### Sparkline

A small line chart without axes.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | array | Chart data | - | Yes | - |
| value | number | Current value to highlight | - | No | - |
| color | string | Line color | "primary" | No | primary, success, warning, error |
| height | number | Chart height | 24 | No | - |
| width | number | Chart width | 80 | No | - |
| showMarker | boolean | Whether to show marker for current value | true | No | - |
| referenceValue | number | Reference value to show | - | No | - |
| referenceLabel | string | Label for reference value | - | No | - |

#### Basic Usage Example

```jsx
<Sparkline 
  data={[5, 10, 8, 15, 12, 9, 14]} 
  value={14} 
  color="success" 
  showMarker={true} 
/>
```

### Custom Chart

A component for creating specialized or custom charts.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| data | any | Chart data | - | Yes | - |
| type | string | Chart type | - | Yes | - |
| width | number | Chart width | 400 | No | - |
| height | number | Chart height | 300 | No | - |
| options | object | Chart options | - | No | - |
| title | string | Chart title | - | No | - |
| subtitle | string | Chart subtitle | - | No | - |
| renderer | function | Custom renderer function | - | No | - |

#### Basic Usage Example

```jsx
<CustomChart 
  type="sunburst" 
  data={hierarchicalData} 
  width={500} 
  height={500} 
  title="Budget Allocation" 
  options={{
    colorScale: "categorical"
  }} 
/>
```

## Typography Components

### Text

A basic text component.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| children | node | Text content | - | Yes | - |
| variant | string | Text variant | "body" | No | body, small, caption |
| color | string | Text color | "default" | No | default, subtle, inverted, primary, success, warning, error |
| weight | string | Font weight | "regular" | No | light, regular, medium, bold |
| align | string | Text alignment | "left" | No | left, center, right, justify |
| truncate | boolean | Whether to truncate text | false | No | - |
| italic | boolean | Whether text is italic | false | No | - |
| gutterBottom | boolean | Whether to add bottom margin | false | No | - |
| gutterTop | boolean | Whether to add top margin | false | No | - |

#### Basic Usage Example

```jsx
<Text 
  variant="body" 
  color="default" 
  weight="regular" 
>
  This is a standard text component.
</Text>
```

### Heading

A component for section headings.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| children | node | Heading content | - | Yes | - |
| variant | string | Heading variant | "h1" | No | h1, h2, h3, h4, h5, h6 |
| color | string | Text color | "default" | No | default, subtle, inverted, primary |
| weight | string | Font weight | "bold" | No | light, regular, medium, bold |
| align | string | Text alignment | "left" | No | left, center, right |
| gutterBottom | boolean | Whether to add bottom margin | false | No | - |
| gutterTop | boolean | Whether to add top margin | false | No | - |
| italic | boolean | Whether text is italic | false | No | - |

#### Basic Usage Example

```jsx
<Heading 
  variant="h2" 
  color="default" 
  gutterBottom={true} 
>
  Section Title
</Heading>
```

### Paragraph

A component for paragraph text.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| children | node | Paragraph content | - | Yes | - |
| variant | string | Paragraph variant | "body" | No | body, small |
| color | string | Text color | "default" | No | default, subtle, inverted, primary |
| weight | string | Font weight | "regular" | No | light, regular, medium, bold |
| align | string | Text alignment | "left" | No | left, center, right, justify |
| gutterBottom | boolean | Whether to add bottom margin | true | No | - |
| gutterTop | boolean | Whether to add top margin | false | No | - |
| italic | boolean | Whether text is italic | false | No | - |
| lineClamp | number | Number of lines before truncating | - | No | - |

#### Basic Usage Example

```jsx
<Paragraph 
  variant="body" 
  color="default" 
  gutterBottom={true} 
>
  This is a paragraph of text. It can contain multiple sentences and will automatically include appropriate spacing.
</Paragraph>
```

### H1-H6

HTML heading elements with consistent styling.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| children | node | Heading content | - | Yes | - |
| color | string | Text color | "default" | No | default, subtle, inverted, primary |
| weight | string | Font weight | "bold" | No | light, regular, medium, bold |
| align | string | Text alignment | "left" | No | left, center, right |
| gutterBottom | boolean | Whether to add bottom margin | false | No | - |
| gutterTop | boolean | Whether to add top margin | false | No | - |
| italic | boolean | Whether text is italic | false | No | - |

#### Basic Usage Example

```jsx
<H1>Page Title</H1>
<H2>Section Heading</H2>
<H3>Subsection Heading</H3>
```

### Lang

A component for displaying text in different languages with proper typography.

#### Props

| Prop Name | Type | Description | Default | Required | Options |
|-----------|------|-------------|---------|----------|---------|
| children | node | Text content | - | Yes | - |
| lang | string | Language code | "en" | Yes | en, fr, de, es, ru, ar, he, zh, ja, ko, etc. |
| dir | string | Text direction | "auto" | No | auto, ltr, rtl |
| variant | string | Text variant | "body" | No | body, small, caption |
| color | string | Text color | "default" | No | default, subtle, inverted, primary |
| weight | string | Font weight | "regular" | No | light, regular, medium, bold |

#### Basic Usage Example

```jsx
<Lang lang="ja">
  これは日本語のテキストです。
</Lang>
```
