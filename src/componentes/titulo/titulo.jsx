const Titulo = ({ text, fuente, color, tamano }) => {
  return (
    <h1 style={{ fontSize: tamano, color: color, fontFamily: fuente }}>
      {text}
    </h1>
  );
};

export default Titulo;
