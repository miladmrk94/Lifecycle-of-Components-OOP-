const Wrapper = (WrapperComp, classStyle) => {
  return (props) => {
    return (
      <div className={classStyle}>
        <WrapperComp />
      </div>
    );
  };
};

export default Wrapper;
