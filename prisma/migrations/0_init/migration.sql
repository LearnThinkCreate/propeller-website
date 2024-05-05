-- CreateTable
CREATE TABLE "customers" (
    "customer_id" BIGINT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "join_date" TIMESTAMP(6),

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "leads" (
    "prospect_id" BIGINT NOT NULL,
    "outcome" TEXT,
    "latest_stage" TEXT,
    "latest_stage_id" BIGINT,
    "created_on" TIMESTAMP(6),
    "date_completed" TIMESTAMP(6),
    "days_to_close" BIGINT,

    CONSTRAINT "leads_pkey" PRIMARY KEY ("prospect_id")
);

-- CreateTable
CREATE TABLE "products" (
    "product_id" BIGINT NOT NULL,
    "drone_model" TEXT,
    "price" BIGINT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "sales_funnel" (
    "sales_id" BIGINT NOT NULL,
    "lead_id" BIGINT,
    "stage" TEXT,
    "entered_stage_date" TIMESTAMP(6),
    "exited_stage_date" TIMESTAMP(6),
    "outcome" TEXT,
    "stage_id" BIGINT,
    "age" BIGINT,

    CONSTRAINT "sales_funnel_pkey" PRIMARY KEY ("sales_id")
);

-- CreateTable
CREATE TABLE "sites" (
    "site_id" BIGINT NOT NULL,
    "upload_id" BIGINT,
    "location" TEXT,

    CONSTRAINT "sites_pkey" PRIMARY KEY ("site_id")
);

-- CreateTable
CREATE TABLE "stages" (
    "stage" TEXT,
    "stage_id" BIGINT NOT NULL,

    CONSTRAINT "stages_pkey" PRIMARY KEY ("stage_id")
);

-- CreateTable
CREATE TABLE "uploads" (
    "upload_id" BIGINT NOT NULL,
    "customer_id" BIGINT,
    "upload_date" TIMESTAMP(6),
    "total_size" DOUBLE PRECISION,
    "product_id" BIGINT,

    CONSTRAINT "uploads_pkey" PRIMARY KEY ("upload_id")
);

-- AddForeignKey
ALTER TABLE "leads" ADD CONSTRAINT "fk_leads_stages" FOREIGN KEY ("latest_stage_id") REFERENCES "stages"("stage_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales_funnel" ADD CONSTRAINT "fk_sales_funnel_leads" FOREIGN KEY ("lead_id") REFERENCES "leads"("prospect_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sales_funnel" ADD CONSTRAINT "fk_sales_funnel_stages" FOREIGN KEY ("stage_id") REFERENCES "stages"("stage_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

