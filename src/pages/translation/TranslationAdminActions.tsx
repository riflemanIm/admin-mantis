import React from "react";

import { Grid, Button, ButtonGroup, Box } from "@mui/material";

import {
  GetApp as DownloadIcon,
  Restore as RestoreIcon,
  LabelImportant as LabelImportantIcon,
} from "@mui/icons-material";

import config from "../../config";

const TranslationAdminActions = ({ pname }: { pname: string }): JSX.Element => {
  return (
    <Box sx={{ pt: 1 }}>
      <ButtonGroup variant="contained">
        <Button
          href="#/app/translation/import"
          startIcon={<LabelImportantIcon />}
        >
          Import
        </Button>
        <Button href="#/app/translation/backups" startIcon={<RestoreIcon />}>
          Restore
        </Button>
        <Button
          href={`${config.baseURLApi}/translations/csv/${pname}`}
          startIcon={<DownloadIcon />}
          sx={{ whiteSpace: "nowrap" }}
        >
          Export CSV
        </Button>
        <Button
          href="#/app/translation/import-csv"
          startIcon={<LabelImportantIcon />}
          sx={{ whiteSpace: "nowrap" }}
        >
          Import CSV
        </Button>
      </ButtonGroup>
    </Box>
  );
};
export default TranslationAdminActions;
