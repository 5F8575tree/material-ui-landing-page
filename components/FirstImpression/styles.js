const styles = {
  firstImpression: {
    marginTop: "88px",
    position: "relative",
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage:
      'url("https://images.unsplash.com/photo-1678105627738-fa7e5ae584f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amFwYW4lMjBnZWlzaGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.1,
  },
  wrapper: {
    minHeight: "600px",
    padding: "16px",
    color: "white",
    display: "flex",
  },
  left: {
    marginRight: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  right: {
    margin: "32px auto",
  },
  photo: {
    height: "220px",
    width: "220px",
    objectFit: "cover",
    marginBottom: "8px",
  },
};

export default styles;
