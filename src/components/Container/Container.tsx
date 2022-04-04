export interface ContainerProps {
  className: string;
  onClick?: () => void;
}

export const Container: React.FC<ContainerProps> = ({ className, onClick, children }) => (
  <div className={className} onClick={onClick}>
    {children}
  </div>
);
