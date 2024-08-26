type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default SectionHeading;
