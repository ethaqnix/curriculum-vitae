import React from "react";
import { Page, View, Document, StyleSheet, Font } from "@react-pdf/renderer";

import PDFHeader from "./Header";
import PDFSkills from "./Skills";
import PDFHistory from "./History";
import PDFFooter from "./Footer";
import colors from "./colors";
import { fonts } from "./fonts";

Object.entries(fonts).forEach(([family, fonts]) => {
  Font.register({
    family,
    fonts,
  });
});

interface PDFPreviewProps {}
// A4 size 595 x 842
// maquette : https://www.cv.fr/api/media/documents/39282172-5122-49f9-9bb6-6577d6befec2/CV-mod%C3%A8le-%C3%89l%C3%A9gant.1693324156612.svg
const PDFStyles = StyleSheet.create({
  page: {
    position: "relative",
    flexDirection: "column",
    backgroundColor: colors.background,
    flex: 1,
  },
  mainContent: {
    flexDirection: "row",
    flexGrow: 1,
  },
});

const PDFDocument = (props: PDFPreviewProps) => {
  return (
    <Document>
      <Page size="A4" style={PDFStyles.page}>
        <View style={PDFStyles.mainContent}>
          <PDFSkills />
          <PDFHistory />
        </View>
        <PDFHeader />
        <PDFFooter />
      </Page>
    </Document>
  );
};

export default PDFDocument;
