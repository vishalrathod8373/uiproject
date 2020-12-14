import React, { Component } from 'react';

export default function TableExample(props) {
    return (
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <p>A</p>
                </div>
                <div class="col-sm">
                    <p>A</p>
                </div>
                <div class="col-sm">
                    <p>A</p>
                </div>
            </div>
            <div class="row row-cols-4">
                <div class="col">Column</div>
                <div class="col">Column</div>
                <div class="col">Column</div>
                <div class="col">Column</div>
            </div>
        </div>
    )
};
