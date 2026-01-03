import { CheckCircleOutlined } from "@ant-design/icons";
import { Flex, theme, Typography } from "antd";

const LeftComponent = () => {
  const { token } = theme.useToken();

  return (
    <Flex vertical gap={20}>
      <Typography.Text className="greyText1">
        Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
        posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
        vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
        porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
        Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et
        condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque
        vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis,
        egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
        Phasellus nec fringilla elit.
      </Typography.Text>
      <Typography.Text className="greyText1">
        Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
        iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
        pellentesque tristique neque mi eget nulla. Proin luctus elementum neque
        et pharetra.
      </Typography.Text>
      <Flex vertical gap={5}>
        <Flex align="center" gap={5}>
          <CheckCircleOutlined
            style={{ color: token.colorPrimary, fontSize: "16px" }}
          />
          <Typography.Text className="greyText1">
            100 g of fresh leaves provides.
          </Typography.Text>
        </Flex>
        <Flex align="center" gap={5}>
          <CheckCircleOutlined
            style={{ color: token.colorPrimary, fontSize: "16px" }}
          />
          <Typography.Text className="greyText1">
            Aliquam ac est at augue volutpat elementum.
          </Typography.Text>
        </Flex>
        <Flex align="center" gap={5}>
          <CheckCircleOutlined
            style={{ color: token.colorPrimary, fontSize: "16px" }}
          />
          <Typography.Text className="greyText1">
            Quisque nec enim eget sapien molestie.
          </Typography.Text>
        </Flex>
        <Flex align="center" gap={5}>
          <CheckCircleOutlined
            style={{ color: token.colorPrimary, fontSize: "16px" }}
          />
          <Typography.Text className="greyText1">
            Proin convallis odio volutpat finibus posuere.
          </Typography.Text>
        </Flex>
      </Flex>
      <Typography.Text className="greyText1">
        Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
        blandit eros non turpis lobortis iaculis at ut massa.
      </Typography.Text>
    </Flex>
  );
};

export default LeftComponent;
