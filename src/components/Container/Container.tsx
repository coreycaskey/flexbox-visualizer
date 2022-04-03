export interface ContainerProps {
  className: string;
}

export const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);
