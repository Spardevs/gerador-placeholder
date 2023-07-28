/**
 * Componente ConfiguracaoForm.
 * Este componente é responsável por exibir o formulário com os campos para configurar o placeholder.
 */

import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

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
    <>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Largura"
          type="number"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Altura"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControl fullWidth>
          <InputLabel id="type-label">Tipo</InputLabel>
          <Select
            labelId="type-label"
            value={isVideo ? "video" : "imagem"}
            onChange={handleTypeChange}
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
            disabled={retinaDisabled}
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
            disabled={formatDisabled}
          >
            <MenuItem value="svg">SVG</MenuItem>
            <MenuItem value="png">PNG</MenuItem>
            <MenuItem value="jpg">JPG</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Texto"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Cor do Texto"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Fonte"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Cor de fundo"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </Grid>
    </>
  );
};

export default ConfiguracaoForm;
