function FooterIcon({ text, children }) {
  return (
    <span className="group">
      {children}
      <span className="font-secondary text-sm hidden group-hover:block absolute bottom-[40px]">
        {text}
      </span>
    </span>
  );
}

export default FooterIcon;
