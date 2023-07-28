import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import ConfiguracaoForm from "./components/ConfiguracaoForm";
import Preview from "./components/Preview";

// Define a paleta de cores escura para o tema dark
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

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
      return `https://placehold.co${baseParams}${
        format === "svg" ? "" : "." + format
      }${textParam}`;
    }
  };

  const imageUrl = generateImageUrl();

  // Função para lidar com a mudança do tipo de conteúdo (imagem ou vídeo)
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
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" style={{ margin: "20px 0px" }}>
                Configuração:
              </Typography>
              <ConfiguracaoForm
                width={width}
                height={height}
                format={format}
                text={text}
                font={font}
                bgColor={bgColor}
                textColor={textColor}
                isVideo={isVideo}
                retina={retina}
                formatDisabled={formatDisabled}
                retinaDisabled={retinaDisabled}
                handleTypeChange={handleTypeChange}
                setWidth={setWidth}
                setHeight={setHeight}
                setFormat={setFormat}
                setText={setText}
                setFont={setFont}
                setBgColor={setBgColor}
                setTextColor={setTextColor}
                setRetina={setRetina}
              />
              
              {/* Botão "Gerar Placeholder" */}
              <Button
                variant="outlined"
                onClick={() => window.open(imageUrl, "_blank")}
                style={{ marginTop: "20px" }}
              >
                Gerar Placeholder
              </Button>

            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Prévia do placeholder */}
              <Preview imageUrl={imageUrl} isVideo={isVideo} />
            </Grid>
          </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
