import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import {
  Header,
  HeaderWrapper,
  PaginationWrapper,
  Row,
  RowLink,
  SortButtonSC,
  TableElement,
  Wrapper,
} from "./Table.styled";
import { TableProps } from "./Table.types";
import { Empty, Pagination } from "antd";
import _ from "lodash";
import { OrderByRule } from "@/types";
import { WithLoader } from "../WithLoader";

export function Table<T>({
  columns,
  elements,
  pagination,
  rowStyles: rowStylesPayload,
  headerStyles,
  isSticky,
  link,
  floating = false,
  extraHeader,
  isLoading,
}: PropsWithChildren<TableProps<T>>) {
  const pageSize = pagination?.pageSize || Infinity;

  const [pageNumber, setPageNumber] = useState(1);
  const [isSorted, setIsSorted] = useState<{
    value?: OrderByRule;
    key: number;
  }>({ key: -1, value: undefined });

  const start = pageSize * (pageNumber - 1);
  const end = pageSize * pageNumber;

  const filteredColumns = columns.filter((elem) => !elem.hidden);

  const temp = filteredColumns.map((column) => column.size).join(" ");

  const renderRow = useCallback(
    (elem: T, rowIndex: number) => {
      const rowStyles =
        typeof rowStylesPayload === "function"
          ? rowStylesPayload(elem)
          : rowStylesPayload;

      const columns = filteredColumns.map((column, columnIndex) => (
        <TableElement key={columnIndex} css={column.css?.(false)}>
          {column.render(elem, rowIndex)}
        </TableElement>
      ));

      if (link) {
        return (
          <RowLink to={link(elem)} temp={temp} css={rowStyles}>
            {columns}
          </RowLink>
        );
      }
      return (
        <Row temp={temp} css={rowStyles}>
          {columns}
        </Row>
      );
    },
    [rowStylesPayload, filteredColumns, link, temp]
  );

  const sortedRows = useMemo(() => {
    const sortedParam = filteredColumns[isSorted.key]?.sortedParam;
    const clonedElements = _.clone(elements);

    if (!sortedParam || !isSorted.value) {
      return clonedElements;
    }
    if (isSorted.value === OrderByRule.Ascending) {
      return _.sortBy(clonedElements, sortedParam);
    }
    return _.sortBy(clonedElements, sortedParam).reverse();
  }, [elements, isSorted, filteredColumns]);

  const columnsComponent = useMemo(
    () =>
      filteredColumns.map((column, columnIndex) => {
        const value = isSorted.key === columnIndex ? isSorted.value : undefined;

        return (
          <TableElement key={columnIndex} css={column.css?.(true)}>
            {column.label}
            {column.sortedParam && (
              <SortButtonSC
                onChange={(value) => {
                  setIsSorted({ key: columnIndex, value });
                }}
                value={value}
              />
            )}
          </TableElement>
        );
      }),
    [filteredColumns, isSorted]
  );

  return (
    <>
      <Wrapper floating={floating} isSticky={isSticky}>
        <HeaderWrapper isSticky={isSticky}>
          <Header temp={temp} css={headerStyles}>
            {columnsComponent}
          </Header>
          {extraHeader}
        </HeaderWrapper>
        <div>
          <WithLoader isLoading={Boolean(isLoading)}>
            {sortedRows
              .slice(start, end)
              .map((elem, rowIndex) => renderRow(elem, rowIndex))}
          </WithLoader>
        </div>
        {!elements.length && !isLoading && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </Wrapper>
      {Boolean(elements.length) && pagination && (
        <PaginationWrapper>
          <Pagination
            pageSize={pageSize}
            total={elements.length}
            current={pageNumber}
            onChange={(pageNumber) => setPageNumber(pageNumber)}
            showSizeChanger={false}
          />
        </PaginationWrapper>
      )}
    </>
  );
}
