// interface IColumnDefinition {
// { headerName: 'Community', field: 'community', sortable: true, filter: true, headerTooltip: 'Community' },
// { headerName: 'Section', field: 'section', sortable: true, filter: true, headerTooltip: 'Section', width: 80 },
// { headerName: 'Lot-Number', field: 'lot_number', sortable: true, filter: true, headerTooltip: 'Lot-Number', width: 80 },
// { headerName: 'Contract-Date', field: 'contract_date', sortable: true, filter: true, headerTooltip: 'Contract-Date', width: 120 },
// { headerName: 'Product', field: 'product', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Product' },
// { headerName: 'Elevation', field: 'elevation', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Elevation' },
// }
// interfaace IDefinition{
// }

// interface IDefaultColumnDefinitionlumn {
// }

interface IColumnOptions {
  filter: boolean,
  sortable: boolean,
  resizable: boolean,

  headerName: string
}

function createDefaultColumnDefinitions(): void {

  // create default column options
  const columnOptions: IColumnOptions = {
    filter: false,
    sortable: false,
    resizable: false,
    headerName: ""
  }

  // Get the local column options

  console.log(columnOptions);
}

createDefaultColumnDefinitions()


const defaultColumnDefinitions = [
  //! Lot info
  {
    headerName: 'Lot Info',
    children:
      [
        { headerName: 'Community', field: 'community', sortable: true, filter: true, headerTooltip: 'Community' },
        { headerName: 'Section', field: 'section', sortable: true, filter: true, headerTooltip: 'Section', width: 80 },
        { headerName: 'Lot-UID', field: 'lot_number', sortable: true, filter: true, headerTooltip: 'Lot-Number', width: 80 },
        { headerName: 'Contract-Date', field: 'contract_date', sortable: true, filter: true, headerTooltip: 'Contract-Date', width: 120 },
        { headerName: 'Product', field: 'product', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Product' },
        { headerName: 'Elevation', field: 'elevation', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Elevation' },
      ],
  },

  //! Drafting
  {
    headerName: 'Drafting',
    children:
      [
        { headerName: 'Assigned To', field: 'assigned', sortable: true, filter: true, headerTooltip: 'Drafter Name', width: 100, },
        { headerName: 'Draft Deadline', field: 'draft_deadline', sortable: true, filter: true, headerTooltip: 'Drafting-Deadline Date', width: 120, },
        { headerName: 'Actual', field: 'actual', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Actual Finished Date', width: 120, },
        { headerName: 'Time', field: 'time', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Total Time in minutes', width: 120, },
      ],
  },

  //! Engineering
  {
    headerName: 'Engineering',
    children:
      [
        { headerName: 'Engineering', field: 'eng', sortable: true, filter: true, headerTooltip: 'Engineering Name', },
        { headerName: 'Eng. Sent', field: 'eng_sent', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Engineering Sent Date', width: 120, },
        { headerName: 'Eng. Planned Receipt', field: 'eng_planned_receipt', sortable: true, filter: true, headerTooltip: 'Engineering Planned Receipt Date', width: 120, },
        { headerName: 'Eng. Actual Receipt', field: 'eng_actual_receipt', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Engineering Actual Receipt Date', width: 120, },
      ]
  },

  //! Plat
  {
    headerName: 'Plat',
    children:
      [
        { headerName: 'Plat Engineering', field: 'plat_eng', sortable: true, filter: true, headerTooltip: 'Plat Engineering Name', },
        { headerName: 'Plat Sent', field: 'plat_sent', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Plat Sent Date', width: 120, },
        { headerName: 'Plat Planned Receipt', field: 'plat_planned_receipt', sortable: true, filter: true, headerTooltip: 'Plat Planned Receipt Date', width: 120, },
        { headerName: 'Plat Actual Receipt', field: 'plat_actual_receipt', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Plat Actual Receipt Date', width: 120, },
      ]
  },

  //! Permit
  {
    headerName: 'Permit',
    children:
      [
        { headerName: 'Permit Jurisdiction', field: 'permit_jurisdiction', sortable: true, filter: true, headerTooltip: 'Jurisdiction Name', },
        { headerName: 'Permit Planned Submit', field: 'permit_planned_submit', sortable: true, filter: true, headerTooltip: 'Permit Planned Submit Date', width: 120, },
        { headerName: 'Permit Actual Submit', field: 'permit_actual_submit', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Permit Actual Submit Date', width: 120, },
        { headerName: 'Permit Received', field: 'permit_received', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'Permit Received Date', width: 120, },
      ]
  },

  //! BBP
  {
    headerName: 'BBP',
    children:
      [
        { headerName: 'BBP Planned Posted', field: 'bbp_planned_posted', sortable: true, filter: true, headerTooltip: 'BBP Planned Posted Date', width: 120, },
        { headerName: 'BBP Actual Posted', field: 'bbp_actual_posted', sortable: true, filter: true, columnGroupShow: 'open', headerTooltip: 'BBP Actual Posted Date', width: 120, },
      ]
  },

  //! Notes
  {
    headerName: 'Notes',
    children:
      [
        { headerName: 'Notes', field: 'notes', sortable: true, filter: true, headerTooltip: 'Extra notes', width: 400, },
      ]
  },
]

export default defaultColumnDefinitions