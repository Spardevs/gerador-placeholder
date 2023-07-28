/**
 * Componente Preview.
 * Este componente é responsável por exibir a prévia da imagem ou vídeo com base nos parâmetros recebidos.
 */

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ImagePreview = ({ imageUrl, isVideo }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      overflow="auto"
    >
      {isVideo ? (
        <video width="100%" height="100%" controls>
          <source src={imageUrl} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      ) : (
        <Box
          component="img"
          src={imageUrl}
          alt="Placeholder"
          style={{ width: "100%", height: "100%", border: "1px solid #ccc" }}
        />
      )}
    </Box>
  );
};

const Preview = ({ imageUrl, isVideo }) => {
  return (
    <>
      <Grid item xs={12}>
        <h6 style={{ marginTop: "20px" }}>Prévia do placeholder:</h6>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          {/* Componente ImagePreview responsável por exibir a prévia da imagem ou vídeo */}
          <ImagePreview imageUrl={imageUrl} isVideo={isVideo} />
        </Box>
      </Grid>
    </>
  );
};

export default Preview;
