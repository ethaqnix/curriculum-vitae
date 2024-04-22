const FONT_PUBLIC_URL = `${window.location.origin}${window.location.pathname}/fonts`;

export const fonts: { [key: string]: any } = {
  Poppins: [
    {
      src: `${FONT_PUBLIC_URL}/TDTjCH39JjVycIF24TlO-Q.ttf`,
    },
  ],
  Roboto: [
    {
      src: `${FONT_PUBLIC_URL}/W5F8_SL0XFawnjxHGsZjJA.ttf`,
    },
    {
      src: `${FONT_PUBLIC_URL}/bdHGHleUa-ndQCOrdpfxfw.ttf`,
      fontStyle: "bold",
    },
    {
      src: `${FONT_PUBLIC_URL}/dtpHsbgPEm2lVWciJZ0P-A.ttf`,
      fontWeight: "light",
    },
  ],
};
