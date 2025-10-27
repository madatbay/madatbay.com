import keystaticConfig from "@/keystatic.config"
import { createReader } from "@keystatic/core/reader"

export default createReader(process.cwd(), keystaticConfig)
