import { ac_holidays } from './acre/index.js'
import { ap_holidays } from './amapa/index.js'
import { am_holidays } from './amazonas/index.js'
import { al_holidays } from './alagoas/index.js'
import { ba_holidays } from './bahia/index.js'
import { ce_holidays } from './ceara/index.js'
import { df_holidays } from './distrito-federal/index.js'
import { ma_holidays } from './maranhao/index.js'
import { mt_holidays } from './mato-grosso/index.js'
import { ms_holidays } from './mato-grosso-do-sul/index.js'
import { mg_holidays } from './minas-gerais/index.js'
import { pa_holidays } from './para/index.js'
import { pb_holidays } from './paraiba/index.js'
import { pr_holidays } from './parana/index.js'
import { pe_holidays } from './pernambuco/index.js'
import { pi_holidays } from './piaui/index.js'
import { rj_holidays } from './rio-de-janeiro/index.js'
import { rn_holidays } from './rio-grande-do-norte/index.js'
import { rs_holidays } from './rio-grande-do-sul/index.js'
import { ro_holidays } from './rondonia/index.js'
import { rr_holidays } from './roraima/index.js'
import { sc_holidays } from './santa-catarina/index.js'
import { sp_holidays } from './sao-paulo/index.js'
import { se_holidays } from './sergipe/index.js'
import { to_holidays } from './tocantins/index.js'

const br_provinces_holidays = [
    ...ac_holidays, ...al_holidays, ...ap_holidays,
    ...am_holidays, ...ba_holidays, ...ce_holidays,
    ...df_holidays, ...ma_holidays, ...mt_holidays, 
    ...ms_holidays, ...mg_holidays, ...pa_holidays, 
    ...pb_holidays, ...pr_holidays, ...pe_holidays, 
    ...pi_holidays, ...rj_holidays , ...rn_holidays, 
    ...rs_holidays, ...ro_holidays, ...rr_holidays, 
    ...sc_holidays, ...sp_holidays, ...se_holidays, 
    ...to_holidays,
]

export default br_provinces_holidays;