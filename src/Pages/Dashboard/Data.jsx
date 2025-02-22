import InboxIcon from "@mui/icons-material/MoveToInbox";
import PersonIcon from "@mui/icons-material/Person";

const AdminPanel = [
  {
    segment: "CustomerManagementScreen",
    title: "Customer Management Screen",
    icon: <PersonIcon />,
    route: "CustomerManagementScreen",
  },
  {
    segment: "RoomManagementScreen",
    title: "Room Management Screen",
    icon: <PersonIcon />,
    route: "RoomManagementScreen",
  },
  {
    segment: "BookingManagementScreen",
    title: "Booking Management Screen",
    icon: <PersonIcon />,
    route: "BookingManagementScreen",
  },
  {
    segment: "PaymentManagementScreen",
    title: "Payment Management Screen",
    icon: <PersonIcon />,
    route: "PaymentManagementScreen",
  },
  {
    segment: "ServiceManagementScreen ",
    title: "Service Management Screen",
    icon: <PersonIcon />,
    route: "ServiceManagementScreen",
  },
  {
    segment: "InventoryManagementScreen",
    title: "Inventory Management Screen",
    icon: <PersonIcon />,
    route: "InventoryManagementScreen",
  },
  {
    segment: "profile",
    title: " Admin Profile",
    icon: <PersonIcon />,
    route: "profile",
  },
];

const CustomerPanel = [
  {
    segment: "rooms",
    title: "Rooms",
    icon: <PersonIcon />,
    route: "rooms",
  },

  {
    segment: "services",
    title: "Services",
    icon: <InboxIcon />,
    route: "services",
  },
  {
    segment: "bookingMethod",
    title: " Booking Method",
    icon: <InboxIcon />,
    route: "bookingMethod",
  },

  {
    segment: "paymentMethod",
    title: "Payment method ",
    icon: <PersonIcon />,
    route: "paymentMethod",
  },
  {
    segment: "userprofile",
    title: " user Profile",
    icon: <PersonIcon />,
    route: "userprofile",
  },
];
export { AdminPanel, CustomerPanel };
