import React, { useRef, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ImagePreview = ({ imageUrl }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      overflow="auto"
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Placeholder"
        style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}
      />
    </Box>
  );
};

const VideoPreview = ({ imageUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Quando a prop imageUrl for atualizada, atualizamos o vídeo reproduzido
    if (videoRef.current) {
      videoRef.current.src = imageUrl;
      videoRef.current.load();
    }
  }, [imageUrl]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      overflow="auto"
    >
      <video ref={videoRef} width="100%" height="100%" controls>
        <source src={imageUrl} type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>
    </Box>
  );
};

const Preview = ({ imageUrl, isVideo }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <Typography variant="h6" style={{ marginTop: "20px" }}>
          Prévia do placeholder:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box>
          {/* Componente ImagePreview ou VideoPreview responsável por exibir a prévia da imagem ou vídeo */}
          {isVideo ? (
            <VideoPreview imageUrl={imageUrl} />
          ) : (
            <ImagePreview imageUrl={imageUrl} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Preview;
