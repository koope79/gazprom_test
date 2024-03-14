import { styled } from "styled-components";
import { Table } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../../../../reduxStore/store";
import { productColumns } from "./columns";
import { FC } from "react";
import { ProductTableProps } from "./types";
import { TProductItems } from "../../../../../reduxStore/products/types";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { setPickedItems } from "../../../../../reduxStore/products/productsSlice";

const TableContainer = styled.div({
    flex: '1 1 auto'
})

const ProductTable: FC<ProductTableProps> = ({ onItemClick, selectedRows }) => {
    const dispatch = useAppDispatch();
    const { products } = useSelector((state: RootState) => state.products);

    return (
        <TableContainer>
            <Table
                dataSource={products}
                columns={productColumns()}
                pagination={false}
                scroll={{y: '75vh'}}
                rowSelection={{
                    selectedRowKeys: selectedRows.map((row) => row.key),
                    onChange: (_, selectedRows: TProductItems[]) => {
                        dispatch(setPickedItems(selectedRows));
                    }
                }}
                onRow={(record: TProductItems) => {
                    return {
                        onClick: () => {
                            onItemClick(record);
                        }
                    };
                }}
            />
        </TableContainer>
    );
};

export default ProductTable;