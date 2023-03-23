import { FaBook, FaChartPie, FaLightbulb, FaTicketAlt, FaUsers, FaUserTie } from 'react-icons/fa';
import { CiGrid42 } from 'react-icons/ci';
import { MdOutlineAccountBalanceWallet, MdViewColumn } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbUserSearch, TbUsers } from 'react-icons/tb';
import { BooleanColumn, CategoricalColumn, CustomColumn, NumericalColumn, NUMERICAL_FORMATS, StringColumn } from 'baseui/data-table';

export const data = [
    ['Avatar', false, 'Action', 237, 2784, 11.7, 8.0],
    ['The Blind Side', false, 'Drama', 29, 309, 10.7, 7.6],
    ['The Dark Knight', false, 'Action', 185, 1005, 5.4, 9.0],
    ['ET: The Extra-Terrestrial', false, 'Drama', 11, 793, 75.5, 7.9],
    ['Finding Nemo', false, 'Adventure', 94, 940, 10.0, 8.1],
    ['Ghostbusters', false, 'Comedy', 144, 229, 1.6, 7.8],
    [
        'The Hunger Games',
        false,
        'Thriller/Suspense',
        78,
        649,
        8.3,
        7.2,
    ],
    ['Iron Man 3', false, 'Action', 178, 1215, 6.8, 7.6],
    ['Jurassic Park', false, 'Action', 53, 1030, 19.4, 8.0],
    ['King Kong', false, 'Adventure', 207, 551, 2.7, 7.3],
    ['The Lion King', false, 'Adventure', 115, 577, 5.0, 8.0],
    ['Monsters, Inc.', false, 'Adventure', 115, 577, 5.0, 8.0],
    [
        'The Twilight Saga: New Moon',
        false,
        'Drama',
        50,
        710,
        14.2,
        4.5,
    ],
    [
        'Oz the Great and Powerful',
        false,
        'Adventure',
        160,
        493,
        3.1,
        6.6,
    ],
    [
        `Pirates of the Caribbean: Dead Man's Chest`,
        false,
        'Adventure',
        225,
        1066,
        4.7,
        7.3,
    ],
    ['Quantum of Solace', false, 'Action', 200, 586, 2.9, 6.7],
    [
        'Raiders of the Lost Ark',
        false,
        'Adventure',
        18,
        390,
        21.7,
        8.7,
    ],
    [
        'Star Wars Ep. I: The Phantom Menace',
        false,
        'Adventure',
        115,
        1027,
        8.9,
        6.5,
    ],
    ['Titanic', false, 'Thriller/Suspense', 200, 2187, 10.9, 7.6],
    ['Up', false, 'Adventure', 175, 735, 4.2, 8.3],
    ['The Vow', false, 'Drama', 30, 196, 6.5, 6.7],
    ['The War of the Worlds', false, 'Action', 132, 704, 5.3, 6.5],
    ['X-Men: The Last Stand', false, 'Action', 210, 459, 2.2, 6.8],
    [`You've Got Mail`, false, 'Drama', 65, 251, 3.9, 6.3],
    ['Zookeeper', false, 'Romantic Comedy', 80, 170, 2.1, 5.0],
]

export const menuData = [
    {
        title: 'Dashboard',
        icon: <CiGrid42 style={{ marginRight: '0.5rem' }} />,
        active: true,
    },
    {
        title: 'Riders',
        icon: <TbUserSearch style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Learners',
        icon: <TbUsers style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Settings',
        icon: <GiTakeMyMoney style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Expense',
        icon: <MdOutlineAccountBalanceWallet style={{ marginRight: '0.5rem' }} />,
    },
]

export const tableTitles = ["Ticket details", "Customer name", "Date", "Priority"]


export const columnsss = [
    StringColumn({
        title: 'lead Name',
        mapDataToValue: (data) => data[0],
    }),
    StringColumn({
        title: 'Phone',
        mapDataToValue: (data) => data[1],
    }),
    CategoricalColumn({
        title: 'Followup date',
        mapDataToValue: (data) => data[2],
    }),
    StringColumn({
        title: 'Last note',
        mapDataToValue: (data) => data[3],
    }),
    StringColumn({
        title: 'Assigned',
        mapDataToValue: (data) => data[4],
    }),
    StringColumn({
        title: 'Email',
        precision: 2,
        mapDataToValue: (data) => data[5],
    }),
    StringColumn({
        title: 'Preferred countries',
        precision: 2,
        mapDataToValue: (data) => data[6],
    }),
];
export const columns = [
    StringColumn({
      title: 'Lead name',
      mapDataToValue: (data) => data[0],
    }),
    StringColumn({
      title: 'Phone',
      mapDataToValue: (data) => data[1],
    }),
    StringColumn({
      title: 'Followup date',
      mapDataToValue: (data) => {
        return String('-')
      },
    }),
    StringColumn({
      title: 'Last note',
      mapDataToValue: (data) => data[0],
    }),
    StringColumn({
      title: 'Assigned',
      mapDataToValue: (data) => data[4],
    }),
    StringColumn({
      title: 'Email',
      precision: 2,
      mapDataToValue: (data) => data[5],
    }),
    StringColumn({
      title: 'Preferred Countries',
      precision: 2,
      mapDataToValue: (data) => data[6],
    }),
    StringColumn({
      title: 'Status',
      precision: 2,
      mapDataToValue: (data) => data[7],
    }),
    StringColumn({
      title: 'Source',
      precision: 2,
      mapDataToValue: (data) => data[8],
    }),
    StringColumn({
      title: 'Actions',
      precision: 2,
      mapDataToValue: (data) => data[3],
    }),
  ];
export   const defaultColumns = [
  {
    id: 'select',
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <div className="px-1">
        <IndeterminateCheckbox
          {...{
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            indeterminate: row.getIsSomeSelected(),
            onChange: row.getToggleSelectedHandler(),
          }}
        />
      </div>
    ),
  },
  {
    accessorKey: 'firstName',
    cell: info => info.getValue(),
    footer: info => info.column.id,
  },
  {
    accessorFn: row => row.lastName,
    id: 'lastName',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  },
  {
    accessorKey: 'age',
    header: () => 'Age',
    footer: info => info.column.id,
  },
  {
    accessorKey: 'visits',
    header: () => <span>Visits</span>,
    footer: info => info.column.id,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    footer: info => info.column.id,
  },
  {
    accessorKey: 'progress',
    header: 'Profile Progress',
    footer: info => info.column.id,
  },
]