import React from "react";
import classes from "./sidebar.module.scss";
import Header from "./header";
import Section from "./Section";
import users from "../../assets/icons/user-friends 1.png";
import Guarantors from "../../assets/icons/Guarantors.png";
import Loans from "../../assets/icons/loans.png";
import decision from "../../assets/icons/decision.png";
import savings from "../../assets/icons/savings.png";
import loanReq from "../../assets/icons/loanReq.png";
import whitelist from "../../assets/icons/whitelist.png";
import karma from "../../assets/icons/karma.png";
import organization from "../../assets/icons/organization.png";
import saving from "../../assets/icons/saving.png";
import fees from "../../assets/icons/fees.png";
import transactions from "../../assets/icons/transaction.png";
import services from "../../assets/icons/services.png";
import servicesAccount from "../../assets/icons/servAccount.png";
import settlements from "../../assets/icons/settllements.png";
import reports from "../../assets/icons/reports.png";
import preferences from "../../assets/icons/preferences.png";
import pricing from "../../assets/icons/pricing.png";
import logs from "../../assets/icons/logs.png";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <div className={classes.sidebar + " " + (isOpen ? classes.open : "")} >
      <Header />
      <Section label="CUSTOMERS" items={sectionOneItems} />
      <Section label="BUSINESSES" items={sectionTwoItems} />
      <Section label="SETTINGS" items={settingsSection} />
    </div>
  );
};

export default Sidebar;

const sectionOneItems = [
  {
    name: "Users",
    icon: users,
    isActive: true,
  },
  {
    name: "Guarantors",
    icon: Guarantors,
    isActive: false,
  }, {
    name: "Loans",
    icon: Loans,
    isActive: false,
  }, {
    name: "Decision Models",
    icon: decision,
    isActive: false,
  }, {
    name: "Savings",
    icon: savings,
    isActive: false,
  }, {
    name: "Loan Requests",
    icon: loanReq,
    isActive: false,
  }, {
    name: "Whitelist",
    icon: whitelist,
    isActive: false,
  }, {
    name: "Karma",
    icon: karma,
    isActive: false,
  }
]
const sectionTwoItems = [
  {
    name: "Organization",
    icon: organization,
    isActive: false,
  }, {
    name: "Loan Products",
    icon: loanReq,
    isActive: false,
  }, {
    name: "Savings Products",
    icon: saving,
    isActive: false,
  }, {
    name: "Fees and Charges",
    icon: fees,
    isActive: false,
  }, {
    name: "Transactions",
    icon: transactions,
    isActive: false,
  }, {
    name: "Services",
    icon: services,
    isActive: false,
  }, {
    name: "Service Account",
    icon: servicesAccount,
    isActive: false,
  }, {
    name: "Settlements",
    icon: settlements,
    isActive: false,
  }, {
    name: "Reports",
    icon: reports,
    isActive: false,
  }]

const settingsSection = [{
  name: "Preferences",
  icon: preferences,
  isActive: false,
}, {
  name: "Fees and Pricing",
  icon: pricing,
  isActive: false,
}, {
  name: "Audit Logs",
  icon: logs,
  isActive: false,
}
]