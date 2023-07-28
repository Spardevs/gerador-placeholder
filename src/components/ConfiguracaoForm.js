/**
 * Componente ConfiguracaoForm.
 * Este componente exibe um formulário com campos de entrada para configurar o espaço reservado (placeholder).
 */

import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ConfiguracaoForm = ({
  width,
  height,
  format,
  text,
  font,
  bgColor,
  textColor,
  isVideo,
  retina,
  formatDisabled,
  retinaDisabled,
  handleTypeChange,
  setWidth,
  setHeight,
  setFormat,
  setText,
  setFont,
  setBgColor,
  setTextColor,
  setRetina,
}) => {
  return (
    <Grid container spacing={2}>
      {/* Campo de entrada "Largura" */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <TextField
            label="Largura"
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            fullWidth
          />
        </Box>
      </Grid>

      {/* Campo de entrada "Altura" */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <TextField
            label="Altura"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            fullWidth
          />
        </Box>
      </Grid>

      {/* Seletor de Tipo de Conteúdo (Imagem/Vídeo) */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <FormControl fullWidth>
            <InputLabel id="type-label">Tipo</InputLabel>
            <Select
              label="Tipo"
              labelId="type-label"
              value={isVideo ? "video" : "imagem"}
              onChange={handleTypeChange}
            >
              <MenuItem value="imagem">Imagem</MenuItem>
              <MenuItem value="video">Vídeo</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      {/* Seletor de Retina */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <FormControl fullWidth>
            <InputLabel id="retina-label">Retina</InputLabel>
            <Select
              label="Retina"
              labelId="retina-label"
              value={retina}
              onChange={(e) => setRetina(e.target.value)}
              disabled={retinaDisabled}
            >
              <MenuItem value="1x">1x</MenuItem>
              <MenuItem value="2x">2x</MenuItem>
              <MenuItem value="3x">3x</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      {/* Seletor de Formato (SVG/PNG/JPG) */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <FormControl fullWidth>
            <InputLabel id="format-label">Formato</InputLabel>
            <Select
              label="Formato"
              labelId="format-label"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              disabled={formatDisabled}
            >
              <MenuItem value="svg">SVG</MenuItem>
              <MenuItem value="png">PNG</MenuItem>
              <MenuItem value="jpg">JPG</MenuItem>
              <MenuItem value="jpeg">JPEG</MenuItem>
              <MenuItem value="webp">Webp</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>

      {/* Campo de entrada "Cor do Texto" */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <TextField
            label="Cor do Texto"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            fullWidth
          />
        </Box>
      </Grid>

      {/* Campo de entrada "Fonte" */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <TextField
            label="Fonte"
            value={font}
            onChange={(e) => setFont(e.target.value)}
            fullWidth
          />
        </Box>
      </Grid>

      {/* Campo de entrada "Cor de Fundo" */}
      <Grid item xs={12} sm={6}>
        <Box marginBottom={2}>
          <TextField
            label="Cor de fundo"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            fullWidth
            // Adicione aqui o componente color picker, quando implementado corretamente
          />
        </Box>
      </Grid>

      {/* Campo de entrada "Texto" */}
      <Grid item xs={12} sm={12}>
        <Box marginBottom={2}>
          <TextField
            label="Texto"
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ConfiguracaoForm;
