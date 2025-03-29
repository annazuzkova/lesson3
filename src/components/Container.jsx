export const Container = ({ title, children }) => (
  <div className="container">
    <h2 className="container__title">{title}</h2>
    {children}
  </div>
);
