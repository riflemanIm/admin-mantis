import React from "react";
import {
  Translate as TranslateIcon,
  Chat as ChatIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  CardGiftcard as CardGiftcardIcon,
  Dns as DnsIcon,
  DonutLarge as DonutLargeIcon,
  LibraryAdd as LibraryAddIcon,
  LocalHospital as LocalHospitalIcon,
  BadgeOutlined as BadgeIcon,
  AcUnit as AcUnitIcon,
  Build as BuildIcon,
  Handshake as HandshakeIcon,
  Settings as SettingsIcon,
  ConfirmationNumber as ConfirmationNumberIcon,
  SendTimeExtension as SendTimeExtensionIcon,
  DataObject as DataObjectIcon,
  LiveHelp as LiveHelpIcon,
  Reviews as ReviewsIcon,
  VerifiedUser as VerifiedUserIcon,
  Speed as SpeedIcon,
  SvgIconComponent,
} from "@mui/icons-material";
import { AccountRole, Feature } from "../../helpers/enums";
import CalyspoIcon from "./calypso";

export interface StructureItem {
  kind?: "page" | "header" | "divider";
  id: string;
  role?: AccountRole[];
  features?: Feature[];
  link?: string;
  icon?: SvgIconComponent;
}

const structure: StructureItem[] = [
  {
    id: "content",
    kind: "header",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.netMarketer],
  },
  {
    id: "specialization",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [],
    icon: BadgeIcon,
    link: "/app/specialization/list",
  },
  {
    id: "promo",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.netMarketer],
    features: [Feature.web, Feature.mobile],
    icon: CardGiftcardIcon,
    link: "/app/promo/list",
  },
  {
    id: "clinic",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [],
    icon: LocalHospitalIcon,
    link: "/app/clinic/list",
  },  
  {
    id: "medical_net",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [],
    icon: LibraryAddIcon,
    link: "/app/medical_net/list",
  },
  {
    id: "medical_brand",
    role: [AccountRole.admin],
    features: [],
    icon: AcUnitIcon,
    link: "/app/medical_brand/list",
  },
  {
    id: "notificationTemplate",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [Feature.web, Feature.mobile],
    link: "/app/notificationTemplate/list",
    icon: EmailIcon,
  },
  {
    id: "agreement",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [Feature.web, Feature.mobile],
    link: "/app/agreement/list",
    icon: HandshakeIcon,
  },
  {
    id: "medicalNetFaq",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [Feature.web, Feature.mobile],
    link: "/app/medicalNetFaq/list",
    icon: LiveHelpIcon,
  },
  {
    id: "webForms",
    role: [AccountRole.admin],
    features: [],
    icon: CalyspoIcon,
    link: "/app/webForm/list",
  },
  {
    id: "userData",
    kind: "header",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.operator],
  },  
  {
    id: "users",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.operator],
    features: [],
    link: "/app/user/list",
    icon: PersonIcon,
  },
  {
    id: "chat",
    role: [AccountRole.operator],
    features: [Feature.chat],
    link: "/app/chat",
    icon: ChatIcon,
  },
  {
    id: "reviews",
    role: [AccountRole.admin],
    features: [],
    link: "/app/review/list",
    icon: ReviewsIcon,
  },
  {
    id: "manage",
    kind: "header",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.operator],
  },
  {
    id: "service",
    role: [AccountRole.admin],
    features: [],
    icon: DnsIcon,
    link: "/app/service/list",
  },
  {
    id: "settings",
    role: [AccountRole.admin],
    features: [],
    icon: SettingsIcon,
    link: "/app/setting/list",
  },
  {
    id: "cacheSettings",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [],
    icon: DataObjectIcon,
    link: "/app/cacheSetting/list",
  },
  {
    id: "hl7Settings",
    role: [AccountRole.admin],
    features: [],
    icon: SendTimeExtensionIcon,
    link: "/app/hl7Setting/list",
  },
  {
    id: "rateLimitSettings",
    role: [AccountRole.admin],
    features: [],
    icon: SpeedIcon,
    link: "/app/rateLimit/list",
  },
  {
    id: "confirmationCodeSettings",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [Feature.web, Feature.mobile],
    icon: ConfirmationNumberIcon,
    link: "/app/confirmationCodeSetting/list",
  },
  {
    id: "translation",
    role: [AccountRole.admin, AccountRole.interpreter],
    features: [],
    icon: TranslateIcon,
    link: "/app/translation/list",
  },
  {
    id: "serviceTasks",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.operator],
    features: [],
    icon: BuildIcon,
    link: "/app/serviceTasks",
  },
  {
    id: "reports",
    kind: "header",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.netMarketer],
  },
  {
    id: "statistics",
    role: [AccountRole.admin, AccountRole.netAdmin, AccountRole.netMarketer],
    features: [],
    link: "/app/user/report",
    icon: DonutLargeIcon,
  },
  {
    id: "audit",
    role: [AccountRole.admin, AccountRole.netAdmin],
    features: [],
    link: "/app/audit/list",
    icon: VerifiedUserIcon,
  },
];

export default structure;
