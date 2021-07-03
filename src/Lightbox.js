function Lightbox({picture, close}) {
  return picture != null ? (
    <div className="lightbox" onClick={() => close()}>
      <div className={`lb_picture p_${picture}`} />
    </div>
  ) : null;
}

export default Lightbox;