export interface ItemProps {
  label: string;
  className: string;
}

export const Item: React.FC<ItemProps> = ({ label, className }) => {
  return <div className={className}>{label}</div>;
};
