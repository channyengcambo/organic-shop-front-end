import SocailMedi from "@/shared/components/socail-medi/SocailMedi";
import { Flex, Typography } from "antd";

const WishListTableFotter = () => {
  return (
    <Flex align="center" gap={10}>
      <Typography.Text>Shared: </Typography.Text>
      <SocailMedi />
    </Flex>
  );
};

export default WishListTableFotter;
