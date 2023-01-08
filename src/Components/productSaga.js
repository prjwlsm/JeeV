import { call, put, takeEvery } from 'redux-saga/effects';
import { getProductsSuccess } from './productStates';

function* workGetCatsFetch() {
    const products = yield call(() => fetch('https://fakestoreapi.com/products'));
    const formattedProducts = yield products.json();
    const formattedProductsShortened = formattedProducts.slice(0, 10);
    yield put(getProductsSuccess(formattedProductsShortened));

}

function* productSaga() {
    yield takeEvery('products/getProductsFetch', workGetCatsFetch);
}

export default productSaga;