# EnterpriSZe Global Components Lib

A reusable component library designed for microservice-based enterprise applications using React, TypeScript, Tailwind, and Vite.

---

## Installation

To get started, you can install the library using npm:

```bash
npm i enterprisze-global-components
```

## Setup Instructions

1. **Clear existing CSS files**:  
   Comment out or delete the contents of the following files to prevent conflicts and unecessary style that may override the styles from the

   - `App.css`
   - `index.css`

2. **Import the library's CSS**:  
   In `App.tsx`, add the following import statement to bring in the library's styles:

   ```tsx
   import "enterprisze-global-components/dist/index.css";
   ```

You're now ready to start using the global components provided by the library!

---

## :page_facing_up: Component Props Documentation

### Avatar

| Name      | Type                                       | Default | Description                     |
| --------- | ------------------------------------------ | ------- | ------------------------------- |
| size      | "large" \| "medium" \| "small" \| "xsmall" | -       | Avatar size                     |
| src       | string                                     | -       | Image source URL                |
| alt       | string                                     | -       | Alt text for accessibility      |
| firstName | string                                     | -       | First name for initials display |
| lastName  | string                                     | -       | Last name for initials display  |
| showBadge | boolean                                    | false   | Show status badge               |

### Badge

| Name         | Type                                                                                   | Default    | Description                     |
| ------------ | -------------------------------------------------------------------------------------- | ---------- | ------------------------------- |
| badgeContent | string                                                                                 | -          | Content to display in the badge |
| children     | React.ReactNode                                                                        | -          | Component to attach badge to    |
| variant      | "dot" \| "standard"                                                                    | "standard" | Badge display style             |
| color        | string                                                                                 | -          | Custom background color         |
| textColor    | string                                                                                 | -          | Custom text color               |
| anchorOrigin | { vertical: "top" \| "bottom" \| "center"; horizontal: "left" \| "right" \| "center" } | -          | Badge positioning               |

### BreadCrumb

| Name  | Type                                                            | Default | Description               |
| ----- | --------------------------------------------------------------- | ------- | ------------------------- |
| items | Array<{ label: string; icon?: React.ReactNode; href?: string }> | -       | Array of breadcrumb items |

### Button

| Name      | Type                                | Default   | Description                  |
| --------- | ----------------------------------- | --------- | ---------------------------- |
| label     | string                              | -         | Button text                  |
| variant   | "primary" \| "secondary" \| "ghost" | "primary" | Button style variant         |
| size      | "large" \| "medium" \| "small"      | "large"   | Button size                  |
| disabled  | boolean                             | false     | Disable button interaction   |
| type      | "button" \| "submit" \| "reset"     | "button"  | Button type                  |
| leftIcon  | React.ReactNode                     | -         | Icon to display on the left  |
| rightIcon | React.ReactNode                     | -         | Icon to display on the right |
| ariaLabel | string                              | -         | Accessibility label          |
| className | string                              | -         | Additional CSS classes       |
| loading   | boolean                             | false     | Show loading state           |
| fullWidth | boolean                             | false     | Make button full width       |
| onClick   | () => void                          | -         | Click handler                |

### ButtonsIcon

| Name      | Type                                | Default   | Description                |
| --------- | ----------------------------------- | --------- | -------------------------- |
| icon      | React.ReactNode                     | -         | Button icon                |
| onClick   | () => void                          | -         | Click handler              |
| variant   | "primary" \| "secondary" \| "ghost" | "primary" | Button style variant       |
| size      | "large" \| "medium" \| "small"      | "large"   | Button size                |
| disabled  | boolean                             | false     | Disable button interaction |
| type      | "button" \| "submit" \| "reset"     | "button"  | Button type                |
| ariaLabel | string                              | -         | Accessibility label        |

### Checkbox

| Name     | Type       | Default | Description         |
| -------- | ---------- | ------- | ------------------- |
| label    | string     | -       | Checkbox label      |
| checked  | boolean    | false   | Checked state       |
| mixed    | boolean    | false   | Indeterminate state |
| onChange | () => void | -       | Change handler      |
| disabled | boolean    | false   | Disable checkbox    |

### Chip

| Name      | Type            | Default | Description       |
| --------- | --------------- | ------- | ----------------- |
| label     | string          | -       | Chip label        |
| onClick   | () => void      | -       | Click handler     |
| startIcon | React.ReactNode | -       | Icon at the start |
| avatar    | React.ReactNode | -       | Avatar component  |
| onDelete  | () => void      | -       | Delete handler    |

### Dropdown

| Name              | Type                         | Default | Description              |
| ----------------- | ---------------------------- | ------- | ------------------------ |
| label             | string                       | -       | Dropdown label           |
| options           | Option[]                     | -       | Dropdown options         |
| multiSelect       | boolean                      | false   | Enable multi-select      |
| isCheckbox        | boolean                      | false   | Show checkboxes          |
| onSelectionChange | (selected: Option[]) => void | -       | Selection change handler |

### Inputs

| Name         | Type                                                                    | Default | Description             |
| ------------ | ----------------------------------------------------------------------- | ------- | ----------------------- |
| label        | string                                                                  | -       | Input label             |
| type         | string                                                                  | "text"  | Input type              |
| placeholder  | string                                                                  | -       | Placeholder text        |
| value        | string                                                                  | -       | Input value             |
| icon         | React.ElementType                                                       | -       | Icon component          |
| iconClick    | () => void                                                              | -       | Icon click handler      |
| onChange     | (e: React.ChangeEvent<HTMLInputElement \| HTMLTextAreaElement>) => void | -       | Change handler          |
| className    | string                                                                  | -       | Additional CSS classes  |
| error        | boolean                                                                 | false   | Show error state        |
| isTextarea   | boolean                                                                 | false   | Render as textarea      |
| maxCharacter | number                                                                  | -       | Maximum character limit |
| description  | string                                                                  | -       | Helper text             |

### Modal

| Name            | Type                                                 | Default  | Description                |
| --------------- | ---------------------------------------------------- | -------- | -------------------------- |
| isOpen          | boolean                                              | -        | Control modal visibility   |
| icon            | React.ReactNode                                      | -        | Modal icon                 |
| onClose         | () => void                                           | -        | Close handler              |
| showHeader      | boolean                                              | true     | Show header section        |
| headerOptions   | "left" \| "stacked-left" \| "center"                 | "left"   | Header layout              |
| title           | string \| React.ReactNode                            | -        | Modal title                |
| subHeading      | string \| React.ReactNode                            | -        | Modal subtitle             |
| content         | string \| React.ReactNode                            | -        | Modal content              |
| headerImage     | string                                               | -        | Header image URL           |
| customHeader    | React.ReactNode                                      | -        | Custom header component    |
| showFooter      | boolean                                              | true     | Show footer section        |
| footerOptions   | "left" \| "stacked-left" \| "center" \| "full-width" | "center" | Footer layout              |
| footerButtons   | ButtonProps[]                                        | []       | Footer buttons             |
| customFooter    | React.ReactNode                                      | -        | Custom footer component    |
| flexWrapButton  | boolean                                              | false    | Allow button wrapping      |
| size            | "xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"        | -        | Modal size                 |
| ariaModal       | boolean                                              | true     | Enable ARIA modal          |
| ariaLabel       | string                                               | -        | ARIA label                 |
| ariaDescribedBy | string                                               | -        | ARIA description reference |

### Pagination

| Name         | Type                                               | Default | Description                    |
| ------------ | -------------------------------------------------- | ------- | ------------------------------ |
| currentPage  | number                                             | -       | Current page number            |
| totalPages   | number                                             | -       | Total number of pages          |
| onChange     | (page: number, meta?: { source?: string }) => void | -       | Page change handler            |
| visiblePages | number                                             | -       | Number of visible page buttons |
| disabled     | boolean                                            | false   | Disable pagination             |
| className    | string                                             | -       | Additional CSS classes         |

### RadioButton

| Name     | Type                    | Default | Description          |
| -------- | ----------------------- | ------- | -------------------- |
| id       | string                  | -       | Radio button ID      |
| name     | string                  | -       | Radio group name     |
| value    | string                  | -       | Radio value          |
| label    | string                  | -       | Radio label          |
| checked  | boolean                 | -       | Checked state        |
| disabled | boolean                 | false   | Disable radio button |
| onChange | (value: string) => void | -       | Change handler       |

### Range

| Name     | Type                    | Default | Description          |
| -------- | ----------------------- | ------- | -------------------- |
| min      | number                  | 0       | Minimum value        |
| max      | number                  | 100     | Maximum value        |
| step     | number                  | 1       | Step value           |
| value    | number                  | -       | Current value        |
| onChange | (value: number) => void | -       | Change handler       |
| disabled | boolean                 | false   | Disable range slider |
| width    | string                  | -       | Slider width         |

### SnackbarAlert

| Name            | Type                                                           | Default                                     | Description             |
| --------------- | -------------------------------------------------------------- | ------------------------------------------- | ----------------------- |
| isOpen          | boolean                                                        | -                                           | Control visibility      |
| title           | string \| React.ReactNode                                      | -                                           | Alert title             |
| message         | string \| React.ReactNode                                      | -                                           | Alert message           |
| type            | "success" \| "error" \| "warning" \| "info"                    | "info"                                      | Alert type              |
| onClose         | () => void                                                     | -                                           | Close handler           |
| duration        | number                                                         | 5000                                        | Auto-hide duration (ms) |
| position        | { vertical: "top" \| "bottom"; horizontal: "left" \| "right" } | { vertical: "bottom", horizontal: "right" } | Alert position          |
| showCloseButton | boolean                                                        | true                                        | Show close button       |
| action          | { label: string; onClick: () => void }                         | -                                           | Action button           |
| autoHide        | boolean                                                        | true                                        | Enable auto-hide        |
| animation       | "slide-up" \| "slide-down" \| "slide-left" \| "fade" \| "none" | "slide-left"                                | Animation type          |
| ariaRole        | "alert" \| "status"                                            | "alert"                                     | ARIA role               |
| showIcon        | boolean                                                        | true                                        | Show type icon          |

### Table

| Name        | Type                                                          | Default | Description       |
| ----------- | ------------------------------------------------------------- | ------- | ----------------- |
| headers     | HeaderType[]                                                  | -       | Table headers     |
| data        | Record<string, React.ReactNode>[]                             | -       | Table data        |
| moreOptions | Array<{ label: string; onClick: (rowIndex: number) => void }> | -       | More options menu |

### TimePicker

| Name     | Type                     | Default    | Description               |
| -------- | ------------------------ | ---------- | ------------------------- |
| value    | string                   | -          | Time value (HH:mm format) |
| label    | string                   | -          | Input label               |
| icon     | React.ReactNode          | -          | Input icon                |
| onChange | (time: string) => void   | -          | Change handler            |
| variant  | "standard" \| "dropdown" | "standard" | Picker variant            |
| format   | "12-hour" \| "24-hour"   | "12-hour"  | Time format               |

### Toggle

| Name     | Type       | Default | Description    |
| -------- | ---------- | ------- | -------------- |
| isOn     | boolean    | -       | Toggle state   |
| onToggle | () => void | -       | Toggle handler |
| disabled | boolean    | false   | Disable toggle |

### Calendar

| Name                  | Type                                                                                                                                                                                                                                            | Default    | Description                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------------------------- |
| value                 | Date                                                                                                                                                                                                                                            | new Date() | Current selected date        |
| shiftData             | Array<{ date: string; type: "rest" \| "holiday" \| "shift" \| "business" \| "leave" \| "workOnLeave" \| "suspended" \| "absent"; start?: string; end?: string; withPay?: boolean; schedules?: { start: string; end: string; type: string }[] }> | -          | Shift data for calendar days |
| onChange              | (value: { month: { name: string; value: number }; year: number }) => void                                                                                                                                                                       | -          | Month/year change handler    |
| enableMonthYearFilter | boolean                                                                                                                                                                                                                                         | true       | Enable month/year editing    |
| width                 | string                                                                                                                                                                                                                                          | -          | Calendar width               |

### CardContainer

| Name            | Type            | Default         | Description      |
| --------------- | --------------- | --------------- | ---------------- |
| icon            | React.ReactNode | -               | Card icon        |
| title           | string          | -               | Card title       |
| backgroundColor | string          | "bg-szWhite100" | Background color |
| content         | React.ReactNode | -               | Card content     |

### CardHeader

| Name      | Type            | Default | Description   |
| --------- | --------------- | ------- | ------------- |
| title     | string          | -       | Header title  |
| leftIcon  | React.ReactNode | -       | Left icon     |
| rightIcon | React.ReactNode | -       | Right icon    |
| onClick   | () => void      | -       | Click handler |

### ConfirmationContent

| Name         | Type                                                                          | Default | Description        |
| ------------ | ----------------------------------------------------------------------------- | ------- | ------------------ |
| title        | string                                                                        | -       | Confirmation title |
| sectionLabel | string                                                                        | -       | Section label      |
| variant      | "add" \| "edit" \| "delete"                                                   | -       | Confirmation type  |
| data         | Array<{ label: string; value: string; oldValue?: string; newValue?: string }> | -       | Data to display    |

### CustomDatePicker

| Name       | Type                  | Default | Description         |
| ---------- | --------------------- | ------- | ------------------- |
| label      | string                | -       | Input label         |
| value      | string \| Date        | -       | Selected date       |
| onChange   | (value: Date) => void | -       | Date change handler |
| error      | boolean               | false   | Error state         |
| disabled   | boolean               | false   | Disable input       |
| helperText | string                | -       | Helper text         |

### Divider

| Name      | Type   | Default               | Description |
| --------- | ------ | --------------------- | ----------- |
| className | string | "py-[16px] px-[80px]" | CSS classes |

### Document

| Name         | Type                         | Default          | Description         |
| ------------ | ---------------------------- | ---------------- | ------------------- |
| onFileChange | (file: File \| null) => void | -                | File change handler |
| label        | string                       | "Upload file..." | Upload prompt text  |

### DropdownMenu

| Name      | Type                                                                  | Default | Description            |
| --------- | --------------------------------------------------------------------- | ------- | ---------------------- |
| items     | Array<{ label: string; onClick: () => void; icon?: React.ReactNode }> | -       | Menu items             |
| className | string                                                                | ""      | Additional CSS classes |

### ItemLimitDropdown

| Name        | Type                                              | Default | Description              |
| ----------- | ------------------------------------------------- | ------- | ------------------------ |
| label       | string                                            | "Label" | Dropdown label           |
| value       | { label: string; value: string }                  | -       | Selected value           |
| options     | Array<{ label: string; value: string }>           | -       | Available options        |
| onChange    | (value: { label: string; value: string }) => void | -       | Selection change handler |
| displayText | string                                            | -       | Custom display text      |
| width       | string                                            | -       | Dropdown width           |
| page        | number                                            | -       | Current page number      |

### JobPositionHistory

| Name  | Type                                                                                                                                                                                                                                                                                                                                                               | Default | Description       |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ----------------- |
| state | "closed" \| "open" \| "other"                                                                                                                                                                                                                                                                                                                                      | -       | Component state   |
| data  | { position: string; positionCode: string; startDate?: Date \| string \| number; endDate?: Date \| string \| number; department: string; length: string; directHead?: string; directHeadPhotoUrl?: string; category: string; monthlyCompensation?: string; otherAllowance?: string; clothingAllowance?: string; riceAllowance?: string; laundryAllowance?: string } | -       | Job position data |

### Payslip

| Name                  | Type                                               | Default | Description                  |
| --------------------- | -------------------------------------------------- | ------- | ---------------------------- |
| backgroundColor       | string                                             | -       | Background color             |
| backgroundImage       | string                                             | -       | Background image URL         |
| user                  | { name: string; role: string; department: string } | -       | User profile data            |
| dateRange             | string                                             | -       | Pay period date range        |
| atm                   | boolean                                            | -       | ATM payment flag             |
| title                 | string[]                                           | -       | Section titles               |
| headers               | Array<{ header: string; accessor: string }>        | -       | Table headers                |
| dataGroups            | Record<string, React.ReactNode>[][]                | -       | Data groups for tables       |
| totalbackgroundColors | string[]                                           | -       | Background colors for totals |
| bottomTitle           | string[]                                           | -       | Bottom section titles        |
| textcolor             | string                                             | -       | Text color                   |

### PendingRequestContent

| Name         | Type                                                                                                | Default | Description             |
| ------------ | --------------------------------------------------------------------------------------------------- | ------- | ----------------------- |
| title        | string                                                                                              | -       | Content title           |
| variant      | "add" \| "edit"                                                                                     | -       | Request type            |
| previous     | Array<{ label: string; value: string; newValue: string }>                                           | -       | Previous data           |
| current      | Array<{ label: string; value: string; newValue: string }>                                           | -       | Current data            |
| onSelect     | (type: "previous" \| "current", data: { label: string; value: string; newValue: string }[]) => void | -       | Selection handler       |
| selectedType | "previous" \| "current"                                                                             | -       | Currently selected type |

### PopoverMenu

| Name   | Type                                                                  | Default | Description   |
| ------ | --------------------------------------------------------------------- | ------- | ------------- |
| items  | Array<{ label: string; onClick: () => void; icon?: React.ReactNode }> | -       | Menu items    |
| zIndex | string                                                                | -       | Z-index value |
| size   | "small" \| "medium" \| "large"                                        | "small" | Menu size     |
| color  | string                                                                | -       | Custom color  |

### PurpleTaggedCard

| Name     | Type            | Default | Description  |
| -------- | --------------- | ------- | ------------ |
| label    | string          | -       | Card label   |
| children | React.ReactNode | -       | Card content |

### SideMenu

| Name        | Type                                                        | Default | Description              |
| ----------- | ----------------------------------------------------------- | ------- | ------------------------ |
| menuItems   | Array<{ id: string; icon: React.ReactNode; label: string }> | -       | Menu items               |
| selected    | string                                                      | -       | Selected menu item ID    |
| setSelected | (selected: string) => void                                  | -       | Selection change handler |
| children    | React.ReactNode                                             | -       | Main content             |

### SideMenuWithProfile

| Name            | Type                                                                | Default | Description              |
| --------------- | ------------------------------------------------------------------- | ------- | ------------------------ |
| user            | { name: string; role: string; department: string; avatar?: string } | -       | User profile data        |
| menuItems       | Array<{ id: string; icon: React.ReactNode; label: string }>         | -       | Menu items               |
| selected        | string                                                              | -       | Selected menu item ID    |
| setSelected     | (selected: string) => void                                          | -       | Selection change handler |
| children        | React.ReactNode                                                     | -       | Main content             |
| backgroundColor | string                                                              | -       | Background color         |

### SidebarMenu

| Name             | Type                                 | Default | Description              |
| ---------------- | ------------------------------------ | ------- | ------------------------ |
| sidebarMenuItems | Array<{ id: string; label: string }> | -       | Sidebar menu items       |
| selected         | string                               | -       | Selected menu item ID    |
| setSelected      | (selected: string) => void           | -       | Selection change handler |
| onToggleSidebar  | () => void                           | -       | Sidebar toggle handler   |

### Tab

| Name    | Type                          | Default | Description    |
| ------- | ----------------------------- | ------- | -------------- |
| label   | string                        | -       | Tab label      |
| number  | number                        | 0       | Tab number     |
| active  | boolean                       | false   | Active state   |
| type    | "left" \| "middle" \| "right" | -       | Tab position   |
| onClick | () => void                    | -       | Click handler  |
| isFirst | boolean                       | false   | First tab flag |
| icon    | React.ReactNode               | -       | Tab icon       |

### Tabs

| Name        | Type                                                                             | Default | Description        |
| ----------- | -------------------------------------------------------------------------------- | ------- | ------------------ |
| options     | Array<{ label: string; value: string; number?: number; icon?: React.ReactNode }> | -       | Tab options        |
| activeIndex | number                                                                           | -       | Active tab index   |
| onTabChange | (idx: number) => void                                                            | -       | Tab change handler |

### TextContent

| Name     | Type            | Default | Description    |
| -------- | --------------- | ------- | -------------- |
| icon     | React.ReactNode | -       | Content icon   |
| header   | string          | -       | Content header |
| text     | string          | -       | Content text   |
| sidetext | string          | -       | Side text      |

### Header

| Name       | Type       | Default | Description                |
| ---------- | ---------- | ------- | -------------------------- |
| src        | string     | -       | Logo image URL             |
| text       | string     | -       | Header text                |
| onClick    | () => void | -       | Menu click handler         |
| iconClick  | () => void | -       | Icon click handler         |
| notifClick | () => void | -       | Notification click handler |
| logoClick  | () => void | -       | Logo click handler         |

---

**Happy coding! 🚀**
