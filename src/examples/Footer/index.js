import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React base styles
import typography from "assets/theme/base/typography";

function Footer() {
  const { size } = typography;

  return (
    <MDBox
      width="100%"
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        CTLABLD SITEMAS &copy; {new Date().getFullYear()}, MPPA - GSI - CTLABLD
      </MDBox>
    </MDBox>
  );
}

export default Footer;
