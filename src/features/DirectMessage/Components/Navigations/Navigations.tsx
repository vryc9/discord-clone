import "./Navigation.scss";
import friends from "../../../../assets/Friends.svg";
import Action, { Actions } from "../../../../components/ui/actions/Action";
import nitro from "../../../../assets/Nitro.svg"
import boutique from "../../../../assets/Boutique.svg"
import { useState } from "react";

const Navigations = () => {
  const [navigation, setNavigation] = useState<Actions[]>([
    { label: "Amis", icon: friends, isSelected: true },
    { label: "Nitro", icon: nitro, isSelected: false },
    { label: "Boutique", icon: boutique, isSelected: false },
  ]);

  const toggleAction = (label: string) => {
    setNavigation((prev) =>
      prev.map((action) => ({
        ...action,
        isSelected: action.label === label,
      }))
    );
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-container">
        {navigation.map(({ icon, label, isSelected }) => (
          <Action
            key={label}
            label={label}
            icon={icon}
            isSelected={isSelected}
            onToggle={() => toggleAction(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigations;
