import {carregarPlano} from "../lib/plano-storage.js";
import { listarMetas } from "../lib/metas-storage.js";

const plano = carregarPlano();
const metas = listarMetas();

console.log("Dados do plano carregados: ", plano);
console.log("Metas carregadas: ", metas);