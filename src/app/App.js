import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define a paleta de cores escura para o tema dark
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

/**
 * Componente que exibe a prévia da imagem ou vídeo com base nos parâmetros recebidos.
 *
 * @param {string} imageUrl - URL da imagem ou vídeo.
 * @param {boolean} isVideo - Define se o conteúdo é um vídeo ou imagem.
 */
const ImagePreview = ({ imageUrl, isVideo }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100%" overflow="auto">
      {isVideo ? (
        <video width="100%" height="100%" controls>
          <source src={imageUrl} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      ) : (
        <Card variant="outlined" style={{ width: "100%", height: "100%" }}>
          <CardMedia component="img" src={imageUrl} alt="Placeholder" style={{ width: "100%", height: "100%" }} />
        </Card>
      )}
    </Box>
  );
};

/**
 * Componente principal da aplicação.
 */
const App = () => {
  // Estados para armazenar os valores dos campos do formulário
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(300);
  const [format, setFormat] = useState("svg");
  const [text, setText] = useState("Placeholder");
  const [font, setFont] = useState("lato");
  const [bgColor, setBgColor] = useState("cccccc");
  const [textColor, setTextColor] = useState("969696");
  const [isVideo, setIsVideo] = useState(false);
  const [formatDisabled, setFormatDisabled] = useState(false);
  const [retina, setRetina] = useState("1x");
  const [retinaDisabled, setRetinaDisabled] = useState(false);

  // Efeito para habilitar ou desabilitar o campo de formato e retina com base no tipo de conteúdo selecionado (imagem ou vídeo)
  useEffect(() => {
    setFormatDisabled(isVideo);
    setRetinaDisabled(isVideo);
  }, [isVideo]);

  // Função para gerar a URL da imagem ou vídeo com base nos parâmetros do formulário
  const generateImageUrl = () => {
    const retinaValue = retina === "1x" ? "" : `@${retina}`;
    const baseParams = `/${width}x${height}${retinaValue}/${bgColor}/${textColor}`;
    const textParam = `?text=${text}&font=${font}`;

    if (isVideo) {
      return `https://placehold.co${baseParams}/mp4${textParam}`;
    } else {
      return `https://placehold.co${baseParams}${format === "svg" ? "" : "." + format}${textParam}`;
    }
  };

  const imageUrl = generateImageUrl();

  const handleTypeChange = (event) => {
    const isVideoType = event.target.value === "video";
    setIsVideo(isVideoType);
    setFormatDisabled(isVideoType);
    setRetinaDisabled(isVideoType);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        {/* Título da página */}
        <Typography variant="h4" gutterBottom margin="20px 0px">
          Gerador de Placeholder
        </Typography>

        {/* Formulário para configuração do placeholder */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField label="Largura" type="number" value={width} onChange={(e) => setWidth(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Altura" type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="type-label">Tipo</InputLabel>
              <Select
                labelId="type-label"
                value={isVideo ? "video" : "imagem"}
                onChange={handleTypeChange} // Utiliza a função handleTypeChange para tratar a mudança de tipo
              >
                <MenuItem value="imagem">Imagem</MenuItem>
                <MenuItem value="video">Vídeo</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
              <InputLabel id="retina-label">Retina</InputLabel>
              <Select
                labelId="retina-label"
                value={retina}
                onChange={(e) => setRetina(e.target.value)}
                disabled={retinaDisabled} // Utiliza o estado "retinaDisabled" para desabilitar o campo "Retina"
              >
                <MenuItem value="1x">1x</MenuItem>
                <MenuItem value="2x">2x</MenuItem>
                <MenuItem value="3x">3x</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel id="format-label">Formato</InputLabel>
              <Select
                labelId="format-label"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                disabled={formatDisabled}// Utiliza o estado "retinaDisabled" para desabilitar o campo "Formato"
              >
                <MenuItem value="svg">SVG</MenuItem>
                <MenuItem value="png">PNG</MenuItem>
                <MenuItem value="jpg">JPG</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Texto" value={text} onChange={(e) => setText(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Cor do Texto" value={textColor} onChange={(e) => setTextColor(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Fonte" value={font} onChange={(e) => setFont(e.target.value)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Cor de fundo" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
          </Grid>
        </Grid>

        {/* Prévia do placeholder */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" marginTop="20px">
              Prévia do placeholder:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} container justifyContent="center" alignItems="center">
            <Box>
              <ImagePreview imageUrl={imageUrl} isVideo={isVideo} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button variant="outlined" onClick={() => window.open(imageUrl, "_blank")}>
              Gerar Placeholder
            </Button>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
