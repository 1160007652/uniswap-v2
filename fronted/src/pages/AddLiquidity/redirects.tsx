import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AddLiquidity from './index';

export function RedirectToAddLiquidity() {
  return <Navigate to={`/add/`} />;
}

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
export function RedirectOldAddLiquidityPathStructure() {
  const navigate = useNavigate();
  const params = useParams<{ currencyIdA: string }>();
  const match = params.currencyIdA?.match(OLD_PATH_STRUCTURE);
  if (match?.length) {
    navigate(`/add/${match[1]}/${match[2]}`);
    return;
  }

  return <AddLiquidity />;
}

export function RedirectDuplicateTokenIds() {
  const params = useParams<{ currencyIdA: string; currencyIdB: string }>();
  if (params.currencyIdA?.toLowerCase() === params.currencyIdB?.toLowerCase()) {
    return <Navigate to={`/add/${params.currencyIdA}`} />;
  }
  return <AddLiquidity />;
}
