import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  overflow: "hidden",
};

interface Props {
  profile: ProfileProps;
  modalOpen: boolean;
  handleClose: () => void;
}

export default function HeroModal({ profile, modalOpen, handleClose }: Props) {
  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              bgcolor: "#707070",
              p: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              src={profile[0]?.avatar}
              style={{ width: "100px", height: "100px" }}
            />
            <Typography
              sx={{ fontSize: "16px", color: "white", fontWeight: "600" }}
              variant="h6"
              component="h2"
            >
              {profile[0]?.username}
            </Typography>
          </Box>
          <Box sx={{ p: "1rem" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "600" }}>
                {" "}
                Create your own page
              </Typography>
              <a
                href="https://www.clozer.io"
                style={{
                  color: "black",
                  fontSize: "0.7rem",
                  border: "1px solid black",
                  borderRadius: "10px",
                  paddingTop: "0.1rem",
                  paddingBottom: "0.1rem",
                  paddingLeft: "0.3rem",
                  paddingRight: "0.3rem",
                }}
                target="_blank"
              >
                CREATE
              </a>
            </Box>
            <div
              style={{
                width: "100%",
                margin: "auto",
                height: "1px",
                backgroundColor: "#989898",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "600" }}>
                Share on Whatsapp
              </Typography>
              <a
                href="https://www.clozer.io"
                style={{
                  color: "black",
                  fontSize: "0.7rem",
                  border: "1px solid black",
                  borderRadius: "10px",
                  paddingTop: "0.1rem",
                  paddingBottom: "0.1rem",
                  paddingLeft: "0.3rem",
                  paddingRight: "0.3rem",
                }}
                target="_blank"
              >
                SHARE
              </a>
            </Box>
            <div
              style={{
                width: "100%",
                margin: "auto",
                height: "1px",
                backgroundColor: "#989898",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ fontSize: "0.9rem", fontWeight: "600" }}>
                Copy Link
              </Typography>
              <a
                href="https://www.clozer.io"
                style={{
                  color: "black",
                  fontSize: "0.7rem",
                  border: "1px solid black",
                  borderRadius: "10px",
                  paddingTop: "0.1rem",
                  paddingBottom: "0.1rem",
                  paddingLeft: "0.3rem",
                  paddingRight: "0.3rem",
                }}
                target="_blank"
              >
                COPY
              </a>
            </Box>
            <div
              style={{
                width: "100%",
                margin: "auto",
                height: "1px",
                backgroundColor: "#989898",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
