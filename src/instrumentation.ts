import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { SimpleSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { registerOTel } from "@vercel/otel";
import { PgInstrumentation } from "@opentelemetry/instrumentation-pg";
import { registerInstrumentations } from "@opentelemetry/instrumentation";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    registerOTel({
      serviceName: process.env.NEXT_OTEL_SERVICE_NAME,
      spanProcessors: [new SimpleSpanProcessor(new OTLPTraceExporter())],
    });
    registerInstrumentations({
      instrumentations: [
        // new HttpInstrumentation(),
        new PgInstrumentation(),
        // new TypeormInstrumentation({
        //   // see under for available configuration
        // }),
      ],
    });
  }
}
