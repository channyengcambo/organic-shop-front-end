import { Table, Image, Typography, Space, Rate, Button, theme } from "antd";
import type { TableProps } from "antd";
import CustomTag from "../../tag/CustomTag";
import { CloseOutlined } from "@ant-design/icons";
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

      //   Action
      if (col.type === "action") {
        return (
          <Space>
            <Button
              style={{
                borderRadius: "50px",
                backgroundColor: record.quantity ? token.colorPrimary : "",
                color: "#fff",
              }}
              disabled={!record.quantity}
            >
              Add to Cart
            </Button>
            <Button danger shape="circle">
              <CloseOutlined />
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
