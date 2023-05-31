import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    { title: "Tab 1", content: "Content 1" },
    { title: "Tab 2", content: "Content 2" },
    { title: "Tab 3", content: "Content 3" },
  ];

  return (
    <div className="tabs">
      <div className="tabs__menu">
        <ul className="tabs__header">
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tabs__tab ${index === activeTab ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="tabs__content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
