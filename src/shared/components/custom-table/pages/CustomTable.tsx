import {
  Table,
  Image,
  Typography,
  Space,
  Rate,
  Button,
  theme,
  Flex,
} from "antd";
import type { TableProps } from "antd";
import CustomTag from "../../tag/CustomTag";
import {
  DeleteOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./CustomTable.nodule.css";

function CustomTable<T extends { id: string }>({
  data,
  columns,
  footer,
}: {
  data: T[];
  columns: any[];
  footer?: () => React.ReactNode;
}) {
  const { token } = theme.useToken();

  const antdColumns: TableProps<T>["columns"] = columns.map((col) => ({
    title: col.title,
    key: col.key,
    fixed: col.type === "action" ? "right" : undefined,
    width: col.type === "action" ? 160 : undefined,

    render: (_: any, record: any) => {
      /** PRODUCT COLUMN */
      if (col.type === "product") {
        return (
          <Space>
            <Image src={record.coverImage} width={100} preview={false} />
            <Typography.Text>{record.title}</Typography.Text>
          </Space>
        );
      }

      /** PRICE */
      if (col.type === "price") {
        return (
          <Space orientation="horizontal" size={5}>
            <Typography.Text strong>
              ${record.totalPrice.toFixed(2)}
            </Typography.Text>

            {record.discountRate > 0 && (
              <Typography.Text delete type="secondary">
                ${record.price.toFixed(2)}
              </Typography.Text>
            )}
          </Space>
        );
      }

      /** RATING */
      if (col.type === "rating") {
        return (
          <Rate disabled allowHalf value={record.userRating} size="small" />
        );
      }

      if (col.type === "stock-status") {
        return record.quantity > 0 ? (
          <CustomTag
            title="In Stock"
            bgColor="#D0FAE5"
            textColor={token.colorSuccess}
          />
        ) : (
          <CustomTag
            title="Out of Stock"
            bgColor="#FFE2E2"
            textColor={token.colorError}
          />
        );
      }

      //   Quantity
      if (col.type === "quantity") {
        return (
          <Flex align="center" gap={10} className="custom-table-quantity">
            <Button aria-label="Decrease quantity" shape="circle">
              <MinusOutlined />
            </Button>
            <Typography.Text strong>{record.quantity}</Typography.Text>
            <Button aria-label="Increase quantity" shape="circle">
              <PlusOutlined />
            </Button>
          </Flex>
        );
      }

      //   Sub total
      if (col.type === "sub-total-price") {
        return (
          <Typography.Text strong>
            ${(record.quantity * record.totalPrice).toFixed(2)}
          </Typography.Text>
        );
      }

      //   Action
      if (col.type === "action") {
        return (
          <Space className="custom-table-actions">
            {!col.hideAddToCart && (
              <Button
                className="custom-table-cart-button"
                disabled={!record.quantity}
                icon={<ShoppingCartOutlined />}
                type={record.quantity ? "primary" : "default"}
              >
                Add to Cart
              </Button>
            )}
            <Button
              aria-label="Remove item"
              className="custom-table-remove-button"
              danger
              shape="circle"
              type="text"
            >
              <DeleteOutlined />
            </Button>
          </Space>
        );
      }

      /** DEFAULT */
      return record[col.key];
    },
  }));

  return (
    <Table
      className="custom-table"
      columns={antdColumns}
      dataSource={data}
      rowKey="id"
      pagination={false}
      scroll={{ x: "max-content" }}
      footer={footer}
    />
  );
}

export default CustomTable;
