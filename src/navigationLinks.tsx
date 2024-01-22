import {
  ApartmentOutlined,
  AuditOutlined,
  BankOutlined,
  CommentOutlined,
  CreditCardOutlined,
  FieldTimeOutlined,
  FileTextOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const topNavigation = [
  {
    icon: <ApartmentOutlined />,
    label: <span>Clusters</span>,
    path: "/",
    type: "internal" as const,
  },
  {
    icon: <SettingOutlined />,
    label: <span>Settings</span>,
    path: "/two",
    type: "internal" as const,
  },
  {
    icon: <BankOutlined />,
    label: <span>Billing</span>,
    path: "/three",
    type: "internal" as const,
  },
  {
    icon: <FieldTimeOutlined />,
    label: <span>Usage</span>,
    path: "/four",
    type: "internal" as const,
  },
  {
    icon: <CreditCardOutlined />,
    label: <span>Payment methods</span>,
    path: "/five",
    type: "internal" as const,
  },
  {
    icon: <AuditOutlined />,
    label: <span>Audit logs</span>,
    path: "/six",
    type: "internal" as const,
  },
  {
    icon: <GlobalOutlined />,
    label: <span>Regions</span>,
    path: "/seven",
    type: "internal" as const,
  },
];

export const bottomNavigation = [
  {
    icon: <FileTextOutlined />,
    label: <span>Documentation</span>,
    path: "https://www.google.com/1",
    type: "external" as const,
  },
  {
    icon: <CommentOutlined />,
    label: <span>Community</span>,
    path: "https://www.google.com/2",
    type: "external" as const,
  },
  {
    icon: <QuestionCircleOutlined />,
    label: <span>Support center</span>,
    path: "https://www.google.com/3",
    type: "external" as const,
  },
];
