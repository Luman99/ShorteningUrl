import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import { useToasts } from 'react-toast-notifications'

import { Api } from '../../util/Api'
import { PageSection } from '../../util/ThemeComponents';
import { ConfirmFragment } from './ConfirmFragment'
import { SuccessFragment } from './SuccessFragment'

export const HomePage = withRouter(({ history, props }) => {
    const [CONFIRM, SUCCESS] = ['confirm', 'success'];
    const { addToast } = useToasts();

    const [fragment, setFragment] = useState(CONFIRM);
    const [data, setData] = useState({ text: '', short_version: ''});
    const [btnDisabled, setBtnDisabled] = useState(false);

    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refresh, setRefresh] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(data);
        axios.post(Api.urls, {text: data.text, short_version: data.short_version})
            .then(res => {
                addToast('Success', {
                    appearance: 'success',
                    autoDismiss: false,
                });
                Redirect()
                setBtnDisabled(true);
            })
            .catch(error => {
                addToast('Something went wrong.', {
                    appearance: 'error',
                    autoDismiss: false,
                });
            })

    }

    function Redirect() {
      history.push((data.text).split('.')[((data.text).split('.')).length-2]);
      window.location.href = data.text;
    }

      function MakeUrlShort() {
          data.short_version = Api.baseUrl + (data.text).split('.')[((data.text).split('.')).length-2]
          return data.short_version
    }

    const onChange = (event) => {
        data.short_version = (data.text).split('.')[((data.text).split('.')).length-2]
        console.log(data)
        console.log('fnamebool' + !data.text)
        setData(prev => {
            prev[event.target.name] = event.target.value;
            if (event.target.name == 'text' || event.target.name == 'short_version') {
                setRefresh(val => !val);
            }
            return prev;
        })
    }
    return (
        <PageSection>
            {fragment === CONFIRM && <ConfirmFragment
                next={() => setFragment(SUCCESS)}
                onChange={onChange}
                payload={payload}
                loading={loading}
                text={data.text}
            />}
            {fragment === SUCCESS && <SuccessFragment
                previous={() => setFragment(CONFIRM)}
                next={handleSubmit}
                short={MakeUrlShort(data)}
                onChange={onChange}
                data={data}
            />}
        </PageSection >
    );
});
