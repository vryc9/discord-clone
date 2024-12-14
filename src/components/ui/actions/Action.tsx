import "./Action.scss";

export interface Actions {
  label: string;
  icon?: string;
  isSelected?: boolean;
}

interface ActionProps extends Actions {
  onToggle: () => void;
}

/**
 * A clickable action item with an icon and label. The action is clickable
 * and has a boolean `isSelected` property that can be toggled by the user.
 * When the action is clicked, the `isSelected` property is passed to the
 * `setActionSelected` function, which toggles the property and updates the
 * action object.
 *
 * @param {{ label: string, icon: string, isSelected: boolean }} props
 * @returns {JSX.Element} A clickable action item with an icon and label
 */
const Action = ({
  label,
  icon,
  isSelected,
  onToggle,
}: ActionProps & { onToggle: () => void }) => {
  return (
    <div className="action-container">
      <div
        onClick={onToggle}
        className={`action-items ${isSelected ? "active" : ""}`}
      >
        {icon && <img src={icon} alt="action-icon" />}
        <p>{label}</p>
      </div>
    </div>
  );
};

export default Action;
